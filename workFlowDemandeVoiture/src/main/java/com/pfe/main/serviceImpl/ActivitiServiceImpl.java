package com.pfe.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;

import com.pfe.main.entity.AgentDAAF;
import com.pfe.main.repository.AgentDAAFRepository;
import com.pfe.main.service.ActivitiService;

//@Service
public class ActivitiServiceImpl implements ActivitiService {
	
	@Autowired
	private RuntimeService runtimeService;

	@Autowired
	private TaskService taskService;

	@Autowired
	private RepositoryService repositoryService;
	
	@Autowired
	AgentDAAFRepository agentDAAFRepository;
	
	@Override
	public String startTheProcess(String assignee) {

		AgentDAAF agent = agentDAAFRepository.findByUserName(assignee);

		Map<String, Object> variables = new HashMap<>();
		variables.put("agent", agent);

		runtimeService.startProcessInstanceByKey("demandeDocumentProcess", variables);

		return processInformation()+agent.getDemandeDocument().toString();
	}

	@Override
	public String processInformation() {

		List<Task> taskList = taskService.createTaskQuery().orderByTaskCreateTime().asc().list();

		StringBuilder processAndTaskInfo = new StringBuilder();
		
		processAndTaskInfo.append("Number of process definition available: "
				+ repositoryService.createProcessDefinitionQuery().count() + " | Task Details= ");

		taskList.forEach(task -> {

			processAndTaskInfo.append("\n"+"ID: " + task.getId() + ", Name: " + task.getName() + ", Assignee: "
					+ task.getAssignee() + ", Description: " );
		});

		return processAndTaskInfo.toString();
	}

	@Override
	public List<Task> getTasks(String assignee) {
		return taskService.createTaskQuery().taskAssignee(assignee).list();
	}

	@Override
	public void completeTask(String taskId) {
		taskService.complete(taskId);

	}

}
