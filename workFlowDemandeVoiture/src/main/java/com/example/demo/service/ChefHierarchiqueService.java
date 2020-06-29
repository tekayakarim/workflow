package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.ChefHierarchique;

import com.example.demo.entity.DemandeVoiture;

public interface ChefHierarchiqueService {
	//begin demande doc


//end demande doc
List<ChefHierarchique> listerAllChefHie();
// begin demande voit
List<DemandeVoiture> getAllNewDemandeVoiture(String userName);
String updateDemandeVoiture(long id,int statut,String motif);
//afficher historique
List<DemandeVoiture> getAllDemandeVoiture(String userName);
//end demande voit
ChefHierarchique getCin(String cin);
}
