package com.pfe.main.service;

import java.util.List;

import com.pfe.main.entity.AgentDAAF;
import com.pfe.main.entity.ChefDAAF;
import com.pfe.main.entity.DemandeDocument;

public interface ChefDAAFService {
	List<DemandeDocument> getAllAcceptedDemande(String userName);
	String ConfierDemande(long idDemande,long id);
	List<AgentDAAF> listerAgentDemandeNull(String userName);
    List<ChefDAAF> listerAllChefDAAF();
    ChefDAAF getChefByCin(String cin);
}
