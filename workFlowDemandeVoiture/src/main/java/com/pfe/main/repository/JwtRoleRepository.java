package com.pfe.main.repository;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.JwtRole;
import com.pfe.main.model.JwtERole;

@Repository
public interface JwtRoleRepository extends JpaRepository<JwtRole, Long> {
	Optional<JwtRole> findByName(JwtERole name);
	JwtRole findByname(JwtERole name);
}
