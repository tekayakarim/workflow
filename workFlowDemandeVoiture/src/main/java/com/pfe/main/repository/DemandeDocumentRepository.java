package com.pfe.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.DemandeDocument;

@Repository
public interface DemandeDocumentRepository extends JpaRepository<DemandeDocument, Long> {
DemandeDocument findByid(Long id);
}
