package com.pfe.main.service;

import java.util.List;

import com.pfe.main.entity.ChefHierarchique;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.entity.DemandeVoiture;

public interface ChefHierarchiqueService {
	//begin demande doc
List<DemandeDocument> getAllNewDemandeDocument(String userName);
String updateDemandeDocument(long id,String statut);
//end demande doc
List<ChefHierarchique> listerAllChefHie();
// begin demande voit
List<DemandeVoiture> getAllNewDemandeVoiture(String userName);
String updateDemandeVoiture(long id,String statut);
//afficher historique
List<DemandeVoiture> getAllDemandeVoiture(String userName);
//end demande voit
ChefHierarchique getCin(String cin);
}
