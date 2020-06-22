package com.pfe.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.AgentDAAF;
@Repository
public interface AgentDAAFRepository extends JpaRepository<AgentDAAF, Long> {
AgentDAAF findByUserName(String userName);
AgentDAAF findByid(long id);
}
