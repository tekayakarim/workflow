package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.DemandeVoiture;

public interface DemandeVoitureService {
	public String CreateDemande(DemandeVoiture demandeVoiture);
	public DemandeVoiture getDemande(long id);
	public String updateDemande(DemandeVoiture demandeVoiture);
	public List<DemandeVoiture> getAllDemande();
	public String deleteDemande(long id);
	public List<DemandeVoiture> getAllDemandeByEmploye(String userName); 
	public String rendreVoiture(long idDemande);
	public List<DemandeVoiture> getDemandeInProgressByCurrentUser(String userName); 
}
