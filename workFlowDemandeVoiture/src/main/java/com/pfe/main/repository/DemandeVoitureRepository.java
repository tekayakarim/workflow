package com.pfe.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.DemandeVoiture;
@Repository
public interface DemandeVoitureRepository extends JpaRepository<DemandeVoiture, Long> {
	DemandeVoiture findByid(long id);
}
