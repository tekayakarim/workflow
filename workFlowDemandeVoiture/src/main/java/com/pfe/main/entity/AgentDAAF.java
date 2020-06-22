package com.pfe.main.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;




import javax.persistence.OneToOne;


@Entity
public class AgentDAAF extends JwtUser{


	@OneToOne(cascade = CascadeType.ALL)
	private DemandeDocument demandeDocument;
	
	private String chefDAAFCin;

	public AgentDAAF(String chefDAAFCin) {
		super();
		this.chefDAAFCin = chefDAAFCin;
	}
	

	public AgentDAAF() {
		super();
	}


	public String getChefDAAFCin() {
		return chefDAAFCin;
	}

	public void setChefDAAFCin(String chefDAAFCin) {
		this.chefDAAFCin = chefDAAFCin;
	}

	public DemandeDocument getDemandeDocument() {
		return demandeDocument;
	}

	public void setDemandeDocument(DemandeDocument demandeDocument) {
		this.demandeDocument = demandeDocument;
	}
	
	
	

}
