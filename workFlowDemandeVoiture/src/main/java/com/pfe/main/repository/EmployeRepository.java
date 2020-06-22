package com.pfe.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.Employe;

@Repository
public interface EmployeRepository extends JpaRepository<Employe,Long> {
Employe findByCin(String cin);
Employe findByNom(String nom);
Employe findByUserName(String userName);
} 
