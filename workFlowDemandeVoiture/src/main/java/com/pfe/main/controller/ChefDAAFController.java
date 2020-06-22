package com.pfe.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.main.entity.AgentDAAF;
import com.pfe.main.entity.ChefDAAF;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.service.ChefDAAFService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/chefDAAF")
public class ChefDAAFController {
	
	@Autowired
	ChefDAAFService chefDAAFService;
	

	
	@GetMapping("/getAllAcceptedDemandeDocument")
	public List<DemandeDocument> getAllDemande(@RequestParam String userName){
		return chefDAAFService.getAllAcceptedDemande(userName);
	}
	@GetMapping("/getAllAgentLibreByChef")
	public List<AgentDAAF> getAllAgentLibre(@RequestParam String userName){
		return chefDAAFService.listerAgentDemandeNull(userName);
	}
	@PostMapping("/confierDemande")
	public String confier(@RequestParam long idDemande,@RequestParam long idAgent) {
		return chefDAAFService.ConfierDemande(idDemande, idAgent);
	}
	@GetMapping("/getAllChefDAAF")
	public List<ChefDAAF> getAllChef(){
		return chefDAAFService.listerAllChefDAAF();
	}
	@GetMapping("/getChefDAAFByCin")
	public ChefDAAF getAgentByUserName(@RequestParam String cin) {
		return chefDAAFService.getChefByCin(cin);
	}
}
