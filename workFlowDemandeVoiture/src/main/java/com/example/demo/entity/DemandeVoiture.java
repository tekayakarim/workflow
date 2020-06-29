package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class DemandeVoiture {

@Id
@GeneratedValue
private long id;
private int nbPassergers;
private String description;
private int statut;
private String typeMission;
private String dateRecuperation;
private String dataDebut;
private String dataFin;
private double poids;
private String lieu_depart;
private String temps_depart;
private String lieu_destination;
private String date_retour;
private String temps_retour;
private String accompagants;
private String motifR;
private String codeOM;
private String taskId;


public String getLieu_depart() {
	return lieu_depart;
}
public void setLieu_depart(String lieu_depart) {
	this.lieu_depart = lieu_depart;
}
public String getTemps_depart() {
	return temps_depart;
}
public void setTemps_depart(String temps_depart) {
	this.temps_depart = temps_depart;
}
public String getLieu_destination() {
	return lieu_destination;
}
public void setLieu_destination(String lieu_destination) {
	this.lieu_destination = lieu_destination;
}
public String getDate_retour() {
	return date_retour;
}
public void setDate_retour(String date_retour) {
	this.date_retour = date_retour;
}
public String getTemps_retour() {
	return temps_retour;
}
public void setTemps_retour(String temps_retour) {
	this.temps_retour = temps_retour;
}
public String getAccompagants() {
	return accompagants;
}
public void setAccompagants(String accompagants) {
	this.accompagants = accompagants;
}
@OneToOne
private Employe emp;

@OneToOne 
private Voiture voiture;



public Voiture getVoiture() {
	return voiture;
}
public void setVoiture(Voiture voiture) {
	this.voiture = voiture;
}
public double getPoids() {
	return poids;
}
public void setPoids(double poids) {
	this.poids = poids;
}
public String getDateRecuperation() {
	return dateRecuperation;
}
public void setDateRecuperation(String dateRecuperation) {
	this.dateRecuperation = dateRecuperation;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public int getNbPassergers() {
	return nbPassergers;
}
public void setNbPassergers(int nbPassergers) {
	this.nbPassergers = nbPassergers;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public int getStatut() {
	return statut;
}
public void setStatut(int statut) {
	this.statut = statut;
}
public String getTypeMission() {
	return typeMission;
}
public void setTypeMission(String typeMission) {
	this.typeMission = typeMission;
}
public Employe getEmp() {
	return emp;
}
public void setEmp(Employe emp) {
	this.emp = emp;
}

public String getDataDebut() {
	return dataDebut;
}
public void setDataDebut(String dataDebut) {
	this.dataDebut = dataDebut;
}
public String getDataFin() {
	return dataFin;
}
public void setDataFin(String dataFin) {
	this.dataFin = dataFin;
}
@Override
public boolean equals(Object obj) {
DemandeVoiture demande=(DemandeVoiture)obj;
	return super.equals(demande.getId());
}
@Override
public String toString() {
	return "DemandeVoiture [id=" + id + ", nbPassergers=" + nbPassergers + ", description=" + description + ", statut="
			+ statut + ", typeMission=" + typeMission + ", dateRecuperation=" + dateRecuperation + ", dataDebut="
			+ dataDebut + ", dataFin=" + dataFin + ", poids=" + poids + ", lieu_depart=" + lieu_depart
			+ ", temps_depart=" + temps_depart + ", lieu_destination=" + lieu_destination + ", date_retour="
			+ date_retour + ", temps_retour=" + temps_retour + ", accompagants=" + accompagants + ", emp=" + emp
			+ ", voiture=" + voiture + "]";
}
public String getMotifR() {
	return motifR;
}
public void setMotifR(String motifR) {
	this.motifR = motifR;
}
public String getCodeOM() {
	return codeOM;
}
public void setCodeOM(String codeOM) {
	this.codeOM = codeOM;
}
public String getTaskId() {
	return taskId;
}
public void setTaskId(String taskId) {
	this.taskId = taskId;
}



}
