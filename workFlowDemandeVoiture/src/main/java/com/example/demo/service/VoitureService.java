package com.example.demo.service;

import com.example.demo.entity.Voiture;

public interface VoitureService {
String addVoiture(Voiture voiture);
String deleteVoiture(String matricule);
Voiture getVoiture(long id);
}
