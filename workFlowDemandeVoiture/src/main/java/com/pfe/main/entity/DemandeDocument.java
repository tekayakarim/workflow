package com.pfe.main.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class DemandeDocument {

	@Id
	@GeneratedValue
	private long id;
	private String description;
	private String type;
	private String statut;
	private String langue;
	@OneToOne
	private Employe emp;
	
	public String getLangue() {
		return langue;
	}
	public void setLangue(String langue) {
		this.langue = langue;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Employe getEmp() {
		return emp;
	}
	public void setEmp(Employe emp) {
		this.emp = emp;
	}

	public String getStatut() {
		return statut;
	}
	public void setStatut(String statut) {
		this.statut = statut;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "DemandeDocument [id=" + id + ", description=" + description + ", type=" + type  + "]";
	}
	@Override
	public boolean equals(Object obj) {
	DemandeDocument demande=(DemandeDocument)obj;
		return super.equals(demande.getId());
	}
	
}
