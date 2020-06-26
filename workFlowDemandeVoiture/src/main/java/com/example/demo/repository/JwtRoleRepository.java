package com.example.demo.repository;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.JwtRole;
import com.example.demo.model.JwtERole;

@Repository
public interface JwtRoleRepository extends JpaRepository<JwtRole, Long> {
	Optional<JwtRole> findByName(JwtERole name);
	JwtRole findByname(JwtERole name);
}
