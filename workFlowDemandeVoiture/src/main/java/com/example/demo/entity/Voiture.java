package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Voiture {
@Id
@GeneratedValue
private long id;
private String matricule;
private int nbChevaux;
private String couleur;
private double poidsAutorise;
private int nbPassagers;
private boolean isDispo;

public boolean isDispo() {
	return isDispo;
}
public void setDispo(boolean isDispo) {
	this.isDispo = isDispo;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getMatricule() {
	return matricule;
}
public void setMatricule(String matricule) {
	this.matricule = matricule;
}
public int getNbChevaux() {
	return nbChevaux;
}
public void setNbChevaux(int nbChevaux) {
	this.nbChevaux = nbChevaux;
}
public String getCouleur() {
	return couleur;
}
public void setCouleur(String couleur) {
	this.couleur = couleur;
}

public double getPoidsAutorise() {
	return poidsAutorise;
}
public void setPoidsAutorise(double poidsAutorise) {
	this.poidsAutorise = poidsAutorise;
}

public int getNbPassagers() {
	return nbPassagers;
}
public void setNbPassagers(int nbPassagers) {
	this.nbPassagers = nbPassagers;
}
public Voiture() {
	super();
	this.isDispo=true;
}
@Override
public boolean equals(Object obj) {
	Voiture voi=(Voiture)obj;
	return super.equals(voi.getId());
}


}
