package com.pfe.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.main.entity.AgentDAAF;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.service.AgentDAAFService;

@RestController
@RequestMapping("/main/agentDAAF")
public class AgentDAAFController {
	@Autowired
	AgentDAAFService agentDAAFService;
	
@GetMapping("/demandeToDo")
public DemandeDocument toDo(@RequestParam String userName){
	return agentDAAFService.getDemandeToDo(userName);
}
@GetMapping("/taskToDo")
public String getTask(@RequestParam String userName) {
	return agentDAAFService.getTaskToDo(userName);
}
@GetMapping("/demandeDone")
public String demandeDone(@RequestParam String userName,@RequestParam String id) {
	return agentDAAFService.DemandeDone(userName, id);
}
@GetMapping("/getAgent")
public AgentDAAF getAgent(@RequestParam long id) {
	return agentDAAFService.getAgent(id);
}
@GetMapping("/getAgentByUserName")
public AgentDAAF getAgentByUserName(@RequestParam String userName) {
	return agentDAAFService.getAgentByUserName(userName);
}
}
