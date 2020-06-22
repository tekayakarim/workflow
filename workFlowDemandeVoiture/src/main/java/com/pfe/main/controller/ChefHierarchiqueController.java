package com.pfe.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.main.entity.ChefHierarchique;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.entity.DemandeVoiture;
import com.pfe.main.service.ChefHierarchiqueService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/chefHierarchique")
public class ChefHierarchiqueController {
@Autowired
ChefHierarchiqueService chefHierarchiqueService;
//demande doc
@GetMapping("/getAllDemandeDocument")
public List<DemandeDocument> getAllDemandeDocument(@RequestParam String userName){
	return chefHierarchiqueService.getAllNewDemandeDocument(userName);
}
@CrossOrigin(origins = "*")
@PutMapping("/updateStatutDemandeDocument")
public String updateDemandeDocumentStatut(@RequestParam Long id,@RequestParam String statut) {
return 	chefHierarchiqueService.updateDemandeDocument(id,statut);
}

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
public String updateDemandeVoitureStatut(@RequestParam Long id,@RequestParam String statut) {
return 	chefHierarchiqueService.updateDemandeVoiture(id, statut);
}
@GetMapping("/getChefHierarchiqueByCin")
public ChefHierarchique getByCin(@RequestParam String cin){
	return chefHierarchiqueService.getCin(cin);
}
}
