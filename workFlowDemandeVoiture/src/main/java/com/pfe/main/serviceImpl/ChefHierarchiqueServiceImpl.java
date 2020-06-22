package com.pfe.main.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.main.entity.ChefHierarchique;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.entity.DemandeVoiture;
import com.pfe.main.repository.ChefHierarchiqueRepository;
import com.pfe.main.repository.DemandeDocumentRepository;
import com.pfe.main.repository.DemandeVoitureRepository;
import com.pfe.main.service.ChefHierarchiqueService;
@Service
public class ChefHierarchiqueServiceImpl implements ChefHierarchiqueService {
	
	@Autowired
	ChefHierarchiqueRepository chefHierarchiqueRepository;
	
	@Autowired
	DemandeDocumentRepository demandeDocumentRepository;
	
	@Autowired
	DemandeVoitureRepository demandeVoitureRepository;
	
	@Override
	public List<DemandeDocument> getAllNewDemandeDocument(String userName) {
		try {
			//current user chef
			ChefHierarchique user=chefHierarchiqueRepository.findByUserName(userName);
			user.setListDemandeDocument(null);
			chefHierarchiqueRepository.flush();
			//all demandes
			List<DemandeDocument> lstAllDemande=demandeDocumentRepository.findAll();
			//liste vide de document
			List<DemandeDocument> lstDemandesChef=new ArrayList<DemandeDocument>();
			//recuperer les demandes des employes de ce chef <user>
			for(DemandeDocument dem:lstAllDemande)
			{
				if(dem.getEmp().getChefHierarchiqueCin().equals(user.getCin()) 
						&& !dem.getStatut().equals("accepted")
						&& !dem.getStatut().equals("denied")
						&& !dem.getStatut().equals("inProgress")
						&& !dem.getStatut().equals("closed"))
				{
					lstDemandesChef.add(dem);	
				}//end if
			}//end for
			user.setListDemandeDocument(lstDemandesChef);
			chefHierarchiqueRepository.flush();
			return user.getListDemandeDocument();
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public String updateDemandeDocument(long id,String statut) {
		try {
			DemandeDocument dem=demandeDocumentRepository.findByid(id);
			dem.setStatut(statut);
			demandeDocumentRepository.flush();
			return "updated";
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return "fail";
	}
	@Override
	public List<ChefHierarchique> listerAllChefHie() {
		
		return chefHierarchiqueRepository.findAll();
	}
	@Override
	public List<DemandeVoiture> getAllNewDemandeVoiture(String userName) {
		try {
			//current user chef
			ChefHierarchique user=chefHierarchiqueRepository.findByUserName(userName);
			//all demandes
			List<DemandeVoiture> lstAllDemande=demandeVoitureRepository.findAll();
			//liste vide de document
			List<DemandeVoiture> lstDemandesChef=new ArrayList<DemandeVoiture>();
			//recuperer les demandes des employes de ce chef <user>
			for(DemandeVoiture dem:lstAllDemande)
			{
				if(dem.getEmp().getChefHierarchiqueCin().equals(user.getCin()) 
						&& !dem.getStatut().equals("accepted")
						&& !dem.getStatut().equals("denied")
						&& !dem.getStatut().equals("toCheck")
						&& !dem.getStatut().equals("inProgress")
						&& !dem.getStatut().equals("closed"))
				{
					lstDemandesChef.add(dem);	
				}//end if
			}//end for
			//ajouter les demandes a l'historique
		if(user.getListDemandeVoiture()==null)
		{
			user.setListDemandeVoiture(lstDemandesChef);
			chefHierarchiqueRepository.flush();
		}
		else
		{
			
			List<DemandeVoiture> lstExist=user.getListDemandeVoiture();
			
			List<DemandeVoiture> lstNewPlusExist=new ArrayList<DemandeVoiture>();
			lstNewPlusExist.addAll(lstExist);
			if(lstNewPlusExist.containsAll(lstDemandesChef)) {return lstDemandesChef;}else
			{
				for(DemandeVoiture demande:lstDemandesChef) {
					if(!lstNewPlusExist.contains(demande))
					{
						lstNewPlusExist.add(demande);	
					}
				}
			}
			/*lstNewPlusExist.addAll(lstDemandesChef);
			//lstNewPlusExist.addAll(lstExist);
			for(DemandeVoiture demande:lstExist) {
				if(lstNewPlusExist.indexOf(demande)==-1)
				{
					lstNewPlusExist.add(demande);	
				}
			}//end for
			
			if(lstNewPlusExist.containsAll(c)) {
			user.setListDemandeVoiture(lstNewPlusExist);
			chefHierarchiqueRepository.flush();
			}*/
		}
	

			return lstDemandesChef;
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public String updateDemandeVoiture(long id, String statut) {
		try {
			DemandeVoiture dem=demandeVoitureRepository.findByid(id);
			dem.setStatut(statut);
			demandeVoitureRepository.flush();
			return "updated";
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return "fail";
	}
	//afficher historique
	@Override
	public List<DemandeVoiture> getAllDemandeVoiture(String userName) {
		
		try {
			//current user chef
			ChefHierarchique user=chefHierarchiqueRepository.findByUserName(userName);
			return user.getListDemandeVoiture();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public ChefHierarchique getCin(String cin) {
		
		return chefHierarchiqueRepository.findByCin(cin);
	}

}
