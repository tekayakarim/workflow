package com.pfe.main.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
@Entity
public class ChefPark extends JwtUser{



	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(	name = "chef_park_list_demande_voiture", 
				joinColumns = @JoinColumn(name = "chef_park_id"), 
				inverseJoinColumns = @JoinColumn(name = "demande_voiture_id"))
	private List<DemandeVoiture> listDemandeVoiture;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(	name = "chef_park_list_voiture", 
				joinColumns = @JoinColumn(name = "chef_park_id"), 
				inverseJoinColumns = @JoinColumn(name = "voiture_matricule"))
	private List<Voiture> listVoiture;

	public List<DemandeVoiture> getListDemandeVoiture() {
		return listDemandeVoiture;
	}

	public void setListDemandeVoiture(List<DemandeVoiture> listDemandeVoiture) {
		this.listDemandeVoiture = listDemandeVoiture;
	}

	public List<Voiture> getListVoiture() {
		return listVoiture;
	}

	public void setListVoiture(List<Voiture> listVoiture) {
		this.listVoiture = listVoiture;
	}
	
	
}
