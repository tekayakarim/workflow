package com.pfe.main.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.main.entity.Employe;
import com.pfe.main.repository.EmployeRepository;
import com.pfe.main.service.EmployeService;
@Service
public class EmployeServiceImpl implements EmployeService {
	@Autowired
	EmployeRepository employeRepository;
	@Override
	public Employe getEmploye(String userName) {
		
		return employeRepository.findByUserName(userName);
	}

}
