package com.pfe.main.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Service;

import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.entity.Employe;
import com.pfe.main.repository.DemandeDocumentRepository;
import com.pfe.main.repository.EmployeRepository;
import com.pfe.main.service.DemandeDocumentService;
@Service
public class DemandeDocumentServiceImpl implements DemandeDocumentService {

	@Autowired
	DemandeDocumentRepository demandeDocumentRepository;
	@Autowired
	EmployeRepository employeRepository;
	@Override
	public String CreateDemande(DemandeDocument demandeDocument) {
		
		try {
			Employe emp = employeRepository.findByNom(demandeDocument.getEmp().getNom());
			if(emp!=null) {
			demandeDocument.setEmp(emp);
			demandeDocument.setStatut("new");
			if(demandeDocumentRepository.save(demandeDocument)!=null)
				return "success";
			}//end if
			else {return "employe not found";}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return "Fail";
	}
	@Override
	public DemandeDocument getDemande(long id) {
	
		return demandeDocumentRepository.findByid(id);
	}
	@Override
	public String updateDemande(DemandeDocument demandeDocument) {
	
		
		try {
			Employe emp = employeRepository.findByNom(demandeDocument.getEmp().getNom());
			demandeDocument.setEmp(emp);
			if(demandeDocumentRepository.findByid(demandeDocument.getId())!=null) {
				if(demandeDocumentRepository.save(demandeDocument)!=null)
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
	public List<DemandeDocument> getAllDemande() {
	
		return demandeDocumentRepository.findAll();
	}
	@Override  
	public String deleteDemande(long id) {
		try {
			DemandeDocument dem=demandeDocumentRepository.findByid(id);
			if(dem.getStatut().equals("new") 
			|| dem.getStatut().equals("denied")
			|| dem.getStatut().equals("closed"))
			{
			demandeDocumentRepository.deleteById(id);
			return "success";
			}
			else
				return "cannot delete a demande with statut not equal to new or denied or closed";
		} catch (IllegalArgumentException e) {
			System.out.println("demande not found");
			e.printStackTrace();
		}
		return "fail";
	} 
	@Override
	public List<DemandeDocument> getAllDemandeByEmploye(String userName) {
		//liste vide de documents
		ArrayList<DemandeDocument> lstDocumentVide=new ArrayList<DemandeDocument>();
		//liste de tout les documents
		List<DemandeDocument> lstDocument=this.getAllDemande();
		try {
			Employe emp=employeRepository.findByUserName(userName);
			
			if(emp!=null) {
			
			for(DemandeDocument dem:lstDocument) {
				if(dem.getEmp().equals(emp))
					lstDocumentVide.add(dem);
			}//end for
			}//end if
		} //end try
		catch (Exception e) { e.printStackTrace();}
		
		return lstDocumentVide;
	}
	@Override
	public String returnEmailById(long id) {
		try {
			DemandeDocument dem=demandeDocumentRepository.findByid(id);
			Employe emp=employeRepository.findByUserName(dem.getEmp().getUserName());
			return emp.getEmail();
		} catch (Exception e) {
			
			e.printStackTrace();
			
		}
		return "not found";
	}
	

}
