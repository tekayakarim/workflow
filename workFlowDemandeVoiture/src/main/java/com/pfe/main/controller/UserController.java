package com.pfe.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.main.entity.JwtUser;
import com.pfe.main.service.EmployeService;
import com.pfe.main.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/user")
public class UserController {
	
@Autowired
EmployeService employeService;

@Autowired
UserService userService;

@GetMapping("/getCurrentUserEmploye")
public JwtUser getUserEmploye(@RequestParam String userName) {
	return employeService.getEmploye(userName);
}
@GetMapping("/getAllUsers")
public List<JwtUser> getAllUsers() {
	return userService.listerAllUsers();
}
@DeleteMapping("/deleteUser")
public String deleteUser(@RequestParam long id) {
	return userService.deleteUser(id);
}
@GetMapping("/getCurrentUser")
public JwtUser getUserEmploye(@RequestParam long id) {
	return userService.getUserById(id);
}
}
