package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.AgentDAAF;
import com.example.demo.entity.ChefDAAF;
import com.example.demo.entity.ChefHierarchique;
import com.example.demo.entity.ChefPark;
import com.example.demo.entity.Employe;
import com.example.demo.entity.JwtRole;
import com.example.demo.entity.JwtUser;
import com.example.demo.model.JwtERole;
import com.example.demo.model.JwtResponse;
import com.example.demo.model.JwtUserDetails;
import com.example.demo.model.LoginRequest;
import com.example.demo.model.MessageResponse;
import com.example.demo.model.SignupRequest;
import com.example.demo.repository.ChefDAAFRepository;
import com.example.demo.repository.ChefHierarchiqueRepository;
import com.example.demo.repository.JwtRoleRepository;
import com.example.demo.repository.JwtUserRepository;
import com.example.demo.security.JwtUtils;
 

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtUserRepository jwtUserRepository;

	@Autowired
	JwtRoleRepository jwtRoleRepository;
	
	@Autowired
	ChefHierarchiqueRepository chefHierarchiqueRepository;
	
	@Autowired
	ChefDAAFRepository chefDAAFRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;



	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser( @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUseNname(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		JwtUserDetails userDetails = (JwtUserDetails) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												userDetails.getUsername(), 
												 roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser( @RequestBody SignupRequest signUpRequest) {
		if (jwtUserRepository.existsByUserName(signUpRequest.getUserName())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

	 JwtUser user=null;

		String strRole = signUpRequest.getRole();
		Set<JwtRole> roles = new HashSet<>();
		if (strRole == null || strRole.toLowerCase().equals("employe")) {
			user=new Employe(signUpRequest.getChefHierarchiqueCin());
			JwtRole employeRole = jwtRoleRepository.findByName(JwtERole.ROLE_EMPLOYE)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(employeRole);
			
		} else {
			switch (strRole.toLowerCase()) {
			case "chef daaf":	
				JwtRole chefDAAFRole = jwtRoleRepository.findByName(JwtERole.ROLE_CHEFDAAF)
						.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
				roles.add(chefDAAFRole);
				user=new ChefDAAF();
				break;
				case "chef park":	
					JwtRole chefparkRole = jwtRoleRepository.findByName(JwtERole.ROLE_CHEFPARK)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(chefparkRole);
					user=new ChefPark();
					break;
				case "chef hierarchique":
					JwtRole chefhierarchiqueRole = jwtRoleRepository.findByName(JwtERole.ROLE_CHEFHIERARCHIQUE)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(chefhierarchiqueRole);
					user=new ChefHierarchique();
					break;
				case "agent daaf":
					JwtRole agentDAAFRole = jwtRoleRepository.findByName(JwtERole.ROLE_AGENTDAAF)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(agentDAAFRole);
					user=new AgentDAAF(signUpRequest.getChefDAAFCin());
					break;
				case "admin":
					JwtRole adminRole = jwtRoleRepository.findByName(JwtERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);
					user=new JwtUser();
					break;
				default:
					JwtRole employeRole = jwtRoleRepository.findByName(JwtERole.ROLE_EMPLOYE)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(employeRole);
					user=new Employe(signUpRequest.getChefHierarchiqueCin());
					
				}
			}
		user.setUserName(signUpRequest.getUserName());
		user.setCin(signUpRequest.getCin());
		user.setNom(signUpRequest.getNom());
		user.setPrenom(signUpRequest.getPrenom());
		user.setPassword(
		 encoder.encode(signUpRequest.getPassword()));
		user.setRoles(roles);
		user.setEmail(signUpRequest.getEmail());
		jwtUserRepository.save(user);
if(signUpRequest.getChefHierarchiqueCin()!=null) {
	ChefHierarchique chef=chefHierarchiqueRepository
			.findByCin(signUpRequest.getChefHierarchiqueCin());
	List<Employe> listEmp=new ArrayList<Employe>();
	if (chef.getListEmploye()==null) {
		listEmp.add((Employe) user);
		chef.setListEmploye(listEmp);
	} else {
listEmp.addAll(chef.getListEmploye());
listEmp.add((Employe) user);
chef.setListEmploye(listEmp);
	}
	chefHierarchiqueRepository.flush();
} 
if(signUpRequest.getChefDAAFCin()!=null) {
	ChefDAAF chef=chefDAAFRepository
			.findByCin(signUpRequest.getChefDAAFCin());
	List<AgentDAAF> listAgent=new ArrayList<AgentDAAF>();
	if (chef.getListAgent()==null) {
		listAgent.add((AgentDAAF) user);
	
	} else {
		listAgent.addAll(chef.getListAgent());
		listAgent.add((AgentDAAF) user);
		
	}
	chef.setListAgent(listAgent);
	chefDAAFRepository.flush();
}
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
