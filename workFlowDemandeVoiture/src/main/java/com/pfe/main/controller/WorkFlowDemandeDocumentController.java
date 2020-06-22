package com.pfe.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.main.serviceImpl.WorkFlowDemandeDocumentService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/main/workflow")
public class WorkFlowDemandeDocumentController {

	@Autowired
	WorkFlowDemandeDocumentService workFlowDemandeDocumentService;
	@GetMapping("/start")
	public String startProcess(@RequestParam String assign) {
		return workFlowDemandeDocumentService.startTheProcess(assign);
	}
}
