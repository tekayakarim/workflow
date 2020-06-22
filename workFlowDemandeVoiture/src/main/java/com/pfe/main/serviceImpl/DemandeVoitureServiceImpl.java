package com.pfe.main.serviceImpl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.main.entity.DemandeVoiture;
import com.pfe.main.entity.Employe;
import com.pfe.main.entity.Voiture;
import com.pfe.main.repository.DemandeVoitureRepository;
import com.pfe.main.repository.EmployeRepository;
import com.pfe.main.repository.VoitureRepository;
import com.pfe.main.service.DemandeVoitureService;
@Service
public class DemandeVoitureServiceImpl implements DemandeVoitureService {
	
	@Autowired
	EmployeRepository employeRepository;
	@Autowired
	DemandeVoitureRepository demandeVoitureRepository;
	@Autowired
	VoitureRepository voitureRepository;
	
	@Override
	public String CreateDemande(DemandeVoiture demandeVoiture) {
		try {
			Employe emp = employeRepository.findByNom(demandeVoiture.getEmp().getNom());
			if(emp!=null) {
				demandeVoiture.setEmp(emp);
				demandeVoiture.setStatut("new");
			if(demandeVoitureRepository.save(demandeVoiture)!=null)
				return "success";
			}//end if
			else {return "employe not found";}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return "Fail";
	
	}

	@Override
	public DemandeVoiture getDemande(long id) {
		return demandeVoitureRepository.findByid(id);
	}

	@Override
	public String updateDemande(DemandeVoiture demandeVoiture) {
		
		try {
			Employe emp = employeRepository.findByNom(demandeVoiture.getEmp().getNom());
			demandeVoiture.setEmp(emp);
			if(demandeVoitureRepository.findByid(demandeVoiture.getId())!=null) {
				if(demandeVoitureRepository.save(demandeVoiture)!=null)
				return "success";
			}
			else
				return "demande not found ";
		} catch (Exception e) {
			e.printStackTrace();
		}

		return "Fail";
	}

	@Override
	public List<DemandeVoiture> getAllDemande() {
		
		return demandeVoitureRepository.findAll();
	}

	@Override
	public String deleteDemande(long id) {
		try {
			DemandeVoiture dem=demandeVoitureRepository.findByid(id);
			if(dem.getStatut().equals("new") || dem.getStatut().equals("denied"))
			{
			demandeVoitureRepository.deleteById(id);
			return "success";
			}
			else
				return "cannot delete a demande with statut not equal to new or denied";
		} catch (IllegalArgumentException e) {
			System.out.println("demande not found");
			e.printStackTrace();
		}
		return "fail";
	}

	@Override
	public List<DemandeVoiture> getAllDemandeByEmploye(String userName) {
		//liste vide de demande
		ArrayList<DemandeVoiture> lstDocumentVide=new ArrayList<DemandeVoiture>();
		//liste de tout les documents
		List<DemandeVoiture> lstDocument=this.getAllDemande();
		try {
			Employe emp=employeRepository.findByUserName(userName);
			
			if(emp!=null) {
			
			for(DemandeVoiture dem:lstDocument) {
				if(dem.getEmp().equals(emp))
					lstDocumentVide.add(dem);
			}//end for
			}//end if
		} //end try
		catch (Exception e) { e.printStackTrace();}
		
		return lstDocumentVide;
	}

	@Override
	public String rendreVoiture(long idDemande) {
		try {
			DemandeVoiture dem=demandeVoitureRepository.findByid(idDemande);
			Voiture voi=voitureRepository.findByid(dem.getVoiture().getId());
			
			voi.setDispo(true);
			voitureRepository.flush();
			
			
	 DateFormat format = new SimpleDateFormat("yyyy/MM/dd ");
				Date date = new Date();
				dem.setDateRecuperation(format.format(date));
				dem.setStatut("closed");
				
			demandeVoitureRepository.flush();
			return "voiture rendu";
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return "fail";
	}

	@Override
	public List<DemandeVoiture> getDemandeInProgressByCurrentUser(String userName) {
		try {
			List<DemandeVoiture> lstdem=this.getAllDemandeByEmploye(userName);
			List<DemandeVoiture> lstRes=new ArrayList<DemandeVoiture>();
			for (DemandeVoiture demandeVoiture : lstdem) {
				if(demandeVoiture.getStatut().equals("inProgress"))
					lstRes.add(demandeVoiture);
			}
			return lstRes;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
