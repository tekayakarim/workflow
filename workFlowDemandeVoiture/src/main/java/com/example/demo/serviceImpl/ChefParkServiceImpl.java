package com.example.demo.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.ChefPark;
import com.example.demo.entity.DemandeVoiture;
import com.example.demo.entity.Voiture;
import com.example.demo.repository.ChefParkRepository;
import com.example.demo.repository.DemandeVoitureRepository;
import com.example.demo.repository.VoitureRepository;
import com.example.demo.service.ChefParkService;
import com.example.demo.service.VoitureService;

@Service
public class ChefParkServiceImpl implements ChefParkService{

	@Autowired
	ChefParkRepository chefParkRepository;
	
	@Autowired
	DemandeVoitureRepository demandeVoitureRepository;
	
	@Autowired
	VoitureService voitureService;
	
	@Autowired
	VoitureRepository voitureRepository;
	
	@Override
	public String ajouterVoiture(String userName, Voiture voiture) {
		
		try {
			System.out.println(voitureService.addVoiture(voiture));
			
			ChefPark chef=chefParkRepository.findByUserName(userName);
			if(chef.getListVoiture()==null)
			{
				List<Voiture> lst=new ArrayList<Voiture>();
				lst.add(voiture);
				chef.setListVoiture(lst);
			}
			else
			{
				List<Voiture> lst=new ArrayList<Voiture>();
				lst.addAll(chef.getListVoiture());
				lst.add(voiture);
				chef.setListVoiture(lst);
			}
			chefParkRepository.flush();
			return "voiture ajouter a la base et a la liste des voitures du chef";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "fail";
	}

	@Override
	public List<DemandeVoiture> getAllAcceptedDemande(String userName) {
		try {
			//current user chef
			ChefPark user=chefParkRepository.findByUserName(userName);
			//all demandes
			List<DemandeVoiture> lstAllDemande=demandeVoitureRepository.findAll();
			//liste vide de document
			List<DemandeVoiture> lstDemandesChef=new ArrayList<DemandeVoiture>();
			//recuperer les demandes acceptes
			for(DemandeVoiture dem:lstAllDemande)
			{
				if(!dem.getStatut().equals("new")
						&& !dem.getStatut().equals("denied")
						&& !dem.getStatut().equals("toCheck")
						&& !dem.getStatut().equals("closed")
						&& !dem.getStatut().equals("inProgress"))
				{
					lstDemandesChef.add(dem);	
				}//end if
			}//end for
			//ajouter les demandes a l'historique
		if(user.getListDemandeVoiture()==null)
		{
			user.setListDemandeVoiture(lstDemandesChef);
			
		}
		else
		{
			List<DemandeVoiture> lstExist=user.getListDemandeVoiture();
			List<DemandeVoiture> lstNewPlusExist=new ArrayList<DemandeVoiture>();
			//lstNewPlusExist.addAll(lstDemandesChef);
			lstNewPlusExist.addAll(lstExist);
			
			for(DemandeVoiture demande:lstDemandesChef) {
				if(lstNewPlusExist.indexOf(demande)!=-1 && lstNewPlusExist.lastIndexOf(demande)!=-1)
					lstNewPlusExist.add(demande);
			}
			
			user.setListDemandeVoiture(lstNewPlusExist);
		}

			chefParkRepository.flush();
			return lstDemandesChef;
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Voiture> getAllVoiture(String userName) {
		ChefPark chef=chefParkRepository.findByUserName(userName);
		return chef.getListVoiture();
	}

	@Override
	public List<Voiture> findAllPoidsAutoriseVoiture(String userName, double poids) {
		try {
			ChefPark chef=chefParkRepository.findByUserName(userName);
			//recuperer tout les voitures du chef
			List<Voiture> lstAllVoiture=chef.getListVoiture();
			//initialser la liste qui va comporter le res voulu
			List<Voiture> lstResVoiture=new ArrayList<Voiture>();
			
			//recuperer les voitures qui ont un poids <= au poids demande
			for(Voiture voi:lstAllVoiture) {
				if(voi.getPoidsAutorise()>=poids) {
					lstResVoiture.add(voi);
				}//end if
			}//end for
			return lstResVoiture;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Voiture> findAllNbPassagersVoiture(String userName, int nbPassagers) {
		try {
			ChefPark chef=chefParkRepository.findByUserName(userName);
			//recuperer tout les voitures du chef
			List<Voiture> lstAllVoiture=chef.getListVoiture();
			//initialser la liste qui va comporter le res voulu
			List<Voiture> lstResVoiture=new ArrayList<Voiture>();
			
			//recuperer les voitures qui ont le nb passagers <= au nombre de la  demande
			for(Voiture voi:lstAllVoiture) {
				if(voi.getNbPassagers()>=nbPassagers) {
					lstResVoiture.add(voi);
				}//end if
			}//end for
			return lstResVoiture;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Voiture> findAllPoidsAutoriseVoitureAndNbPassagers(String userName,
																	double poids,
																	int nbPassagers) {
		try {
			//initialiser liste voiture(1)  find par poids(2) et nombre passagers
			List<Voiture> lst=new ArrayList<Voiture>();
			
			//ajouter les listes (1) et (2)
			lst.addAll(findAllNbPassagersVoiture(userName,nbPassagers));
			lst.addAll(findAllPoidsAutoriseVoiture(userName,poids));
			
			//initialiser liste res
			List<Voiture> lstRes=new ArrayList<Voiture>();
			
			//eliminer les redondances
			for(Voiture voi:lst) {
				if(!lst.contains(voi))
					lstRes.add(voi);
			}//end for
			return lstRes;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<DemandeVoiture> getAll(String userName) {
		try {
			ChefPark chef=chefParkRepository.findByUserName(userName);
			return chef.getListDemandeVoiture();
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

	@Override
	public List<Voiture> getVoitureDispoByCurrentChefPark(String userName) {
	
		try {
			List<Voiture> allVoiture=this.getAllVoiture(userName);
			List<Voiture> lstDispoVoiture=new ArrayList<Voiture>();
			for (Voiture voiture : allVoiture) {
				if (voiture.isDispo()) {
					lstDispoVoiture.add(voiture);
				}
			}
			return lstDispoVoiture;
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public String assginVoiture(long idVoiture, long idDemande) {
		try {
			Voiture voi=voitureService.getVoiture(idVoiture);
			DemandeVoiture dem=demandeVoitureRepository.findByid(idDemande);
			
			voi.setDispo(false);
			voitureRepository.flush();
			
			dem.setStatut("inProgress");
			dem.setVoiture(voi);
			demandeVoitureRepository.flush();
			return "demande assigned";
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return "fail to assign demande";
	}

	@Override
	public List<DemandeVoiture> getHistoriqueDemandeVoitureByCurrentChef(String userName) {
		try {
			List<DemandeVoiture> lstAll=demandeVoitureRepository.findAll();
			List<DemandeVoiture> lstHis=new ArrayList<DemandeVoiture>();
			
			for (DemandeVoiture demandeVoiture : lstAll) {
				if(demandeVoiture.getStatut().equals("closed"))
					lstHis.add(demandeVoiture);
			}
			return lstHis;
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return null;
	}

}
