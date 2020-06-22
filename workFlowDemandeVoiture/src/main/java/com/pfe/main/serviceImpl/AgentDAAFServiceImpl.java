package com.pfe.main.serviceImpl;

import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.main.entity.AgentDAAF;
import com.pfe.main.entity.DemandeDocument;
import com.pfe.main.repository.AgentDAAFRepository;
import com.pfe.main.repository.DemandeDocumentRepository;
import com.pfe.main.service.ActivitiService;
import com.pfe.main.service.AgentDAAFService;
@Service
public class AgentDAAFServiceImpl implements AgentDAAFService {
	
	@Autowired
	ActivitiService activitiService;
	
	@Autowired
	DemandeDocumentRepository demandeDocumentRepository;
	
	@Autowired
	AgentDAAFRepository agentDAAFRepository;
	@Override
	public DemandeDocument getDemandeToDo(String userName) {
		System.out.println( activitiService.processInformation());
		return agentDAAFRepository.findByUserName(userName).getDemandeDocument();

	}

	@Override
	public String DemandeDone(String userName,String id) {
		activitiService.completeTask(id);
		try {
			AgentDAAF agent=agentDAAFRepository.findByUserName(userName);
			
			DemandeDocument dem=agent.getDemandeDocument();
			dem.setStatut("closed");
			demandeDocumentRepository.flush();
			
			agent.setDemandeDocument(null);
			agentDAAFRepository.flush();
			return "Demande done";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "fail to complete demande";
	}

	@Override
	public AgentDAAF getAgent(long id) {
		
		return agentDAAFRepository.findByid(id);
	}

	@Override
	public String getTaskToDo(String userName) {
		
		for(Task task:activitiService.getTasks(userName)) {
			return task.getId();
		}
		return null;
	}

	@Override
	public AgentDAAF getAgentByUserName(String userName) {
		
		return agentDAAFRepository.findByUserName(userName);
	}
	

}
