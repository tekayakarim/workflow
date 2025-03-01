package com.pfe.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.ChefPark;
@Repository
public interface ChefParkRepository extends JpaRepository<ChefPark, Long> {
ChefPark findByUserName(String userName);
}
