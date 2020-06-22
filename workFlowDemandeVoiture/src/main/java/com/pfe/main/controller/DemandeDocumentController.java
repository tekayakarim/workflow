package com.pfe.main.controller;

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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.service.DemandeDocumentService;


@RestController
@CrossOrigin(origins = "*")

@RequestMapping("/main/demandeDocument")
public class DemandeDocumentController {

	@Autowired
	DemandeDocumentService demandeDocumentService;
	//@PreAuthorize("hasRole('EMPLOYE')")
	@PostMapping("/add")  
	public String create(@RequestBody DemandeDocument demandeDocument) {
		return demandeDocumentService.CreateDemande(demandeDocument);
	}
	@GetMapping("/get")
	public DemandeDocument get(@RequestParam Long id) {
	return 	demandeDocumentService.getDemande(id);
	}
	//@PreAuthorize("hasRole('EMPLOYE')")
	@PutMapping("/update")
	public String update(@RequestBody DemandeDocument demandeDocument) {
		return demandeDocumentService.updateDemande(demandeDocument);
	}
	@GetMapping("/getAll")
	public List<DemandeDocument> getAll(){
		return demandeDocumentService.getAllDemande();
	}
	@DeleteMapping("/delete")
	public String delete(@RequestParam long id) {
		return demandeDocumentService.deleteDemande(id);
	}
	@GetMapping("/getByCurrentUser")
	@PreAuthorize("#userName == authentication.principal.username and hasRole('EMPLOYE')")
	public List<DemandeDocument> get(@RequestParam String userName) {
	return 	demandeDocumentService.getAllDemandeByEmploye(userName);
	} 
	@GetMapping("/getMail")
	@JsonIgnore
	//@PreAuthorize("hasRole('CHEFHIERARCHIQUE')")
	public String getMail(@RequestParam long id) {
		System.out.println( demandeDocumentService.returnEmailById(id));
		return demandeDocumentService.returnEmailById(id);
	}
	
}
