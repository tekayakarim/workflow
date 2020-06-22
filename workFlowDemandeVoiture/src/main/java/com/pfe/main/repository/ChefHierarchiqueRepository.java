package com.pfe.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.ChefHierarchique;
@Repository
public interface ChefHierarchiqueRepository extends JpaRepository<ChefHierarchique, Long> {
	ChefHierarchique findByCin(String cin);
	ChefHierarchique findByUserName(String userName);
}
