package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.DemandeVoiture;
import com.example.demo.entity.Voiture;

public interface ChefParkService {
String ajouterVoiture(String userName,Voiture voiture);
List<DemandeVoiture> getAllAcceptedDemande(String userName);
List<Voiture> getAllVoiture(String userName);
List<Voiture> findAllPoidsAutoriseVoiture(String userName,double poids);
List<Voiture> findAllNbPassagersVoiture(String userName,int nbPassagers);
List<Voiture> findAllPoidsAutoriseVoitureAndNbPassagers(String userName,double poids,int nbPassagers);
List<DemandeVoiture> getAll(String userName);
String updateDemandeVoiture(long id,String statut);
List<Voiture> getVoitureDispoByCurrentChefPark(String userName);
String assginVoiture(long idVoiture,long idDemande);
List<DemandeVoiture> getHistoriqueDemandeVoitureByCurrentChef(String userName);
}
