package com.example.demo.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.JwtUser;
import com.example.demo.model.JwtUserDetails;
import com.example.demo.repository.JwtUserRepository;

@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	JwtUserRepository jwtUserRepository;


	@Override
	@Transactional
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		JwtUser user = jwtUserRepository.findByUserName(userName)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + userName));

		return JwtUserDetails.build(user);
	}


}
