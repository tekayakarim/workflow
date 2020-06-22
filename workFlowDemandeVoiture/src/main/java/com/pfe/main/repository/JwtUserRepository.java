package com.pfe.main.repository;

import java.util.Optional;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.main.entity.JwtUser;



@Repository
public interface JwtUserRepository extends JpaRepository<JwtUser, Long> {

	Boolean existsByUserName(String userName);
	Optional<JwtUser> findByUserName(String userName);
	JwtUser findByid(long id);

}
