package com.pfe.main.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

@Entity
public class ChefDAAF extends JwtUser{
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(	name = "chef_DAAF_list_demande_document", 
				joinColumns = @JoinColumn(name = "chef_DAAF_id"), 
				inverseJoinColumns = @JoinColumn(name = "demande_document_id"))
	private List<DemandeDocument> listDemandeDocument;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(	name = "chef_DAAF_list_agent", 
				joinColumns = @JoinColumn(name = "chef_DAAF_id"), 
				inverseJoinColumns = @JoinColumn(name = "agent_id"))
	private List<AgentDAAF> listAgent;

	public List<DemandeDocument> getListDemandeDocument() {
		return listDemandeDocument;
	}

	public void setListDemandeDocument(List<DemandeDocument> listDemandeDocument) {
		this.listDemandeDocument = listDemandeDocument;
	}

	public List<AgentDAAF> getListAgent() {
		return listAgent;
	}

	public void setListAgent(List<AgentDAAF> listAgent) {
		this.listAgent = listAgent;
	}
	
}
