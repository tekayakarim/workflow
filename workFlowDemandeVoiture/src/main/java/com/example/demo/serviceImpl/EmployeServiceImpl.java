package com.example.demo.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employe;
import com.example.demo.repository.EmployeRepository;
import com.example.demo.service.EmployeService;
@Service
public class EmployeServiceImpl implements EmployeService {
	@Autowired
	EmployeRepository employeRepository;
	@Override
	public Employe getEmploye(String userName) {
		
		return employeRepository.findByUserName(userName);
	}

}
