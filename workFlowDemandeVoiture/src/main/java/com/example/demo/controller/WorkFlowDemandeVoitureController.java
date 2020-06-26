package com.example.demo.controller;

import java.util.List;

import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.DemandeVoiture;
import com.example.demo.serviceImpl.WorkFlowDemandeVoitureService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/workflow")
public class WorkFlowDemandeVoitureController {

	@Autowired
	WorkFlowDemandeVoitureService workFlowDemandeVoitureService;
	@PostMapping("/start")
	public String startProcess(@RequestParam String assign
								,@RequestBody DemandeVoiture demandeVoiture) {
		return workFlowDemandeVoitureService.startTheProcess(assign,demandeVoiture);
	}
	
			
			@GetMapping("/getTasks")
			public List<Task> getTasks(@RequestParam String assign) {
				return workFlowDemandeVoitureService.getTasks(assign);
			}
}
