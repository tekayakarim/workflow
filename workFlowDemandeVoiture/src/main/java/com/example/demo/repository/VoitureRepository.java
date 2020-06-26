package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Voiture;
@Repository
public interface VoitureRepository extends JpaRepository<Voiture, Long> {
Voiture findByMatricule(String matricule);
Voiture findByid(long id);
}
