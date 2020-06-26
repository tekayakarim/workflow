package com.pfe.main.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.main.entity.AgentDAAF;
import com.pfe.main.entity.ChefDAAF;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.repository.AgentDAAFRepository;
import com.pfe.main.repository.ChefDAAFRepository;
import com.pfe.main.repository.DemandeDocumentRepository;
import com.pfe.main.service.ActivitiService;
import com.pfe.main.service.ChefDAAFService;
@Service
public class ChefDAAFServiceImpl implements ChefDAAFService {
	
	@Autowired
	ChefDAAFRepository chefDAAFRepository;
	
	@Autowired
	AgentDAAFRepository agentDAAFRepository;
	
	@Autowired
	ActivitiService activitiService;
	
	@Autowired
	DemandeDocumentRepository demandeDocumentRepository;
	
	
	@Override
	public List<DemandeDocument> getAllAcceptedDemande(String userName) {
		try {
			//current user chef
			ChefDAAF user=chefDAAFRepository.findByUserName(userName);
			System.out.println(user);
			user.setListDemandeDocument(null);
			chefDAAFRepository.flush();
			//all demandes
			List<DemandeDocument> lstAllDemande=demandeDocumentRepository.findAll();
			//liste vide de document
			List<DemandeDocument> lstDemandesChef=new ArrayList<DemandeDocument>();
			//recuperer les demandes accepter par les chefs hierarchiques
			for(DemandeDocument dem:lstAllDemande)
			{
				if(!dem.getStatut().equals("new")
				&& !dem.getStatut().equals("denied")
				&& !dem.getStatut().equals("toCheck")
				&& !dem.getStatut().equals("inProgress")
				&& !dem.getStatut().equals("closed"))
				{
					lstDemandesChef.add(dem);	
				}//end if
			}//end for
			user.setListDemandeDocument(lstDemandesChef);
			chefDAAFRepository.flush();
			return user.getListDemandeDocument();
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public String ConfierDemande(long idDemande,long id) {
		AgentDAAF agent=agentDAAFRepository.findByid(id);
		DemandeDocument demande=demandeDocumentRepository.findByid(idDemande);
		System.out.println(agent);
		if(agent.getDemandeDocument()!=null)
			return "cet agent travaille deja sur une demande";
		else if(demande==null) {
			return "demande introuvable";
		}
		else if(!demande.getStatut().equals("accepted")) {
			return "demande n'est pas accepter";
		}
		else
		{
			//set dem to agent
			demande.setStatut("inProgress");
			demandeDocumentRepository.flush();
			agent.setDemandeDocument(demande);
			agentDAAFRepository.flush();
			return activitiService.startTheProcess(agent.getUserName());
		}
	}
	@Override
	public List<AgentDAAF> listerAgentDemandeNull(String userName) {
		try {
			ChefDAAF chef=chefDAAFRepository.findByUserName(userName);
			//recuperer les agents de chef
			List<AgentDAAF> lst=chef.getListAgent();
			//liste vide d'agent
			List<AgentDAAF> lstVide=new ArrayList<AgentDAAF>();
			for(AgentDAAF agent:lst) {
				if(agent.getDemandeDocument()==null)
					lstVide.add(agent);
			}//end for
			return lstVide;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public List<ChefDAAF> listerAllChefDAAF() {
		
		return chefDAAFRepository.findAll();
	}
	@Override
	public ChefDAAF getChefByCin(String cin) {
		
		return chefDAAFRepository.findByCin(cin);
	}
	



		


}
