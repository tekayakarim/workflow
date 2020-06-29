package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

@Entity
public class ChefHierarchique extends JwtUser{



	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(	name = "chef_hierarchique_list_demande_voiture", 
				joinColumns = @JoinColumn(name = "chef_hierarchique_id"), 
				inverseJoinColumns = @JoinColumn(name = "demande_voiture_id"))
	private List<DemandeVoiture> listDemandeVoiture;
	

	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(	name = "chef_hierarchique_list_employe", 
				joinColumns = @JoinColumn(name = "chef_hierarchique_id"), 
				inverseJoinColumns = @JoinColumn(name = "employe_id"))
	private List<Employe> listEmploye;
	

	public List<Employe> getListEmploye() {
		return listEmploye;
	}

	public void setListEmploye(List<Employe> listEmploye) {
		this.listEmploye = listEmploye;
	}

	public List<DemandeVoiture> getListDemandeVoiture() {
		return listDemandeVoiture;
	}

	public void setListDemandeVoiture(List<DemandeVoiture> listDemandeVoiture) {
		this.listDemandeVoiture = listDemandeVoiture;
	}


	
	

}
