package com.pfe.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.Voiture;
@Repository
public interface VoitureRepository extends JpaRepository<Voiture, Long> {
Voiture findByMatricule(String matricule);
Voiture findByid(long id);
}
