package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ChefHierarchique;
import com.example.demo.entity.DemandeVoiture;
import com.example.demo.service.ChefHierarchiqueService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/chefHierarchique")
public class ChefHierarchiqueController {
@Autowired
ChefHierarchiqueService chefHierarchiqueService;
//demande doc




@GetMapping("/getAllChefHierarchique")
public List<ChefHierarchique> getAllChef(){
	return chefHierarchiqueService.listerAllChefHie();
}
//demande voiture
@GetMapping("/getAllDemandeVoiture")
public List<DemandeVoiture> getAllDemandeVoiture(@RequestParam String userName){
	return chefHierarchiqueService.getAllNewDemandeVoiture(userName);
}
@CrossOrigin(origins = "*")
@PutMapping("/updateStatutDemandeVoiture")
public String updateDemandeVoitureStatut(@RequestParam Long id,
										@RequestParam int statut,
										@RequestParam String motif) {
return 	chefHierarchiqueService.updateDemandeVoiture(id, statut,motif);
}
@GetMapping("/getChefHierarchiqueByCin")
public ChefHierarchique getByCin(@RequestParam String cin){
	return chefHierarchiqueService.getCin(cin);
}
}
