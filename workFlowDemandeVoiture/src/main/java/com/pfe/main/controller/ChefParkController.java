package com.pfe.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.main.entity.DemandeVoiture;
import com.pfe.main.entity.Voiture;
import com.pfe.main.service.ChefParkService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/chefPark")
public class ChefParkController {
	
	@Autowired
	ChefParkService chefParkService;
	
	@PostMapping("/addVoiture")
	public String addVoiture(@RequestParam String userName,@RequestBody Voiture voiture) {
		return chefParkService.ajouterVoiture(userName, voiture);
	}
	
	@GetMapping("/getAllAcceptedDemandeVoiture")
	public List<DemandeVoiture> getAllDemande(@RequestParam String userName){
		return chefParkService.getAllAcceptedDemande(userName);
	}
	
	@GetMapping("/getAllVoiture")
	public List<Voiture> getAllVoiture(@RequestParam String userName){
		return chefParkService.getAllVoiture(userName);
	}
	
	@GetMapping("/getAllVoiturePoids")
	public List<Voiture> getAllVoiturePoids(@RequestParam String userName,
													@RequestParam double poids){
		return chefParkService.findAllPoidsAutoriseVoiture(userName, poids);
	}
	
	@GetMapping("/getAllVoiturePassagers")
	public List<Voiture> getAllVoiturePassagers(@RequestParam String userName,
													@RequestParam int nbPassagers){
		return chefParkService.findAllNbPassagersVoiture(userName, nbPassagers);
	}
	@GetMapping("/getAllVoiturePP")
	public List<Voiture> getAllVoiturePoids(@RequestParam String userName,
													@RequestParam double poids,
													@RequestParam int nbPassagers){
	return chefParkService.findAllPoidsAutoriseVoitureAndNbPassagers(userName, poids, nbPassagers);
	}
	@GetMapping("/getAllVoitureDispo")
	public List<Voiture> getVoitureDispoByCurrentChefPark(@RequestParam String userName) {
		return chefParkService.getVoitureDispoByCurrentChefPark(userName);
	}
	
	@PutMapping("/assignVoiture")
	public String assign(@RequestParam long idVoiture
						 ,@RequestParam long idDemande) {
		return chefParkService.assginVoiture(idVoiture, idDemande);
	}
	
	@GetMapping("/getHistoriqueDemandeVoitureByCurrentChef")
	public List<DemandeVoiture> getHistoriqueDemandeVoitureByCurrentChef(@RequestParam String userName) {
		return chefParkService.getHistoriqueDemandeVoitureByCurrentChef(userName);
	}
}

