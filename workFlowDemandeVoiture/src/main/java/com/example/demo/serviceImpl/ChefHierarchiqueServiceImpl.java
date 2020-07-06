package com.example.demo.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.ChefHierarchique;
import com.example.demo.entity.DemandeVoiture;
import com.example.demo.repository.ChefHierarchiqueRepository;
import com.example.demo.repository.DemandeVoitureRepository;
import com.example.demo.service.ChefHierarchiqueService;
@Service
public class ChefHierarchiqueServiceImpl implements ChefHierarchiqueService {
	
	@Autowired
	ChefHierarchiqueRepository chefHierarchiqueRepository;
	

	
	@Autowired
	DemandeVoitureRepository demandeVoitureRepository;
	
	@Autowired
	WorkFlowDemandeVoitureService workFlowDemandeVoitureService;

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
						&& dem.getStatut()==-1
						//&& !dem.getStatut().equals("denied")
						//&& !dem.getStatut().equals("toCheck")
						//&& !dem.getStatut().equals("inProgress")
						/*&& !dem.getStatut().equals("closed")*/)
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
	public String updateDemandeVoiture(long id, int statut,String motif) {
		try {
			DemandeVoiture dem=demandeVoitureRepository.findByid(id);
			dem.setStatut(statut);
			if(motif.length()!=0) {
				dem.setMotifR(motif);
			}
			demandeVoitureRepository.flush();
			
			workFlowDemandeVoitureService.completeTask(dem.getTaskId());
			
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
	@Override
	public String complete(String task) {
		workFlowDemandeVoitureService.completeTask(task);
		return "done";
		}

}
