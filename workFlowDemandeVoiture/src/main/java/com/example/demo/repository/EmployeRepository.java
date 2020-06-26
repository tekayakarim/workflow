package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employe;

@Repository
public interface EmployeRepository extends JpaRepository<Employe,Long> {
Employe findByCin(String cin);
Employe findByNom(String nom);
Employe findByUserName(String userName);
} 
