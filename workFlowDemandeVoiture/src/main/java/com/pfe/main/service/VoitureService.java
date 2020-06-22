package com.pfe.main.service;

import com.pfe.main.entity.Voiture;

public interface VoitureService {
String addVoiture(Voiture voiture);
String deleteVoiture(String matricule);
Voiture getVoiture(long id);
}
