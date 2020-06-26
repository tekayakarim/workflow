package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.DemandeVoiture;
import com.example.demo.service.DemandeVoitureService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/demandeVoiture")
public class DemandeVoitureController {
	
	@Autowired
	DemandeVoitureService demandeVoitureService;
	@PostMapping("/add")  
	public String create(@RequestBody DemandeVoiture demandeVoiture) {
		return demandeVoitureService.CreateDemande(demandeVoiture);
	}
	@GetMapping("/get")
	public DemandeVoiture get(@RequestParam Long id) {
	return 	demandeVoitureService.getDemande(id);
	}
	@PutMapping("/update")
	public String update(@RequestBody DemandeVoiture demandeVoiture) {
		return demandeVoitureService.updateDemande(demandeVoiture);
	}
	@GetMapping("/getAll")
	public List<DemandeVoiture> getAll(){
		return demandeVoitureService.getAllDemande();
	}
	@DeleteMapping("/delete")
	public String delete(@RequestParam long id) {
		return demandeVoitureService.deleteDemande(id);
	}
	@GetMapping("/getByCurrentUser")
	@PreAuthorize("#userName == authentication.principal.username and hasRole('EMPLOYE')")
	public List<DemandeVoiture> get(@RequestParam String userName) {
	return 	demandeVoitureService.getAllDemandeByEmploye(userName);
	} 
	@PutMapping("/rendreVoiture")
	public String update(@RequestParam long idDemande) {
		return demandeVoitureService.rendreVoiture(idDemande);
	}
	
	@GetMapping("/getDemandeInProgressByCurrentUser")
	public List<DemandeVoiture> getDemandeInProgressByCurrentUser(
			@RequestParam String userName){
		return demandeVoitureService.getDemandeInProgressByCurrentUser(userName);
	}
}
