package com.pfe.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.RepositoryService;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.main.entity.Employe;
import com.pfe.main.repository.EmployeRepository;
import com.pfe.main.service.ActivitiService;
@Service
public class WorkFlowDemandeDocumentService implements ActivitiService {
	
	@Autowired
	EmployeRepository employeRepository;
	
	@Autowired
	private TaskService taskService;
	
	@Autowired
	private RepositoryService repositoryService;

	@Override
	public String startTheProcess(String assignee) {
		Employe employe=employeRepository.findByUserName(assignee);
		
		Map<String, Object> variables = new HashMap<>();
		variables.put("employe", employe);
		return processInformation();
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void completeTask(String taskId) {
		// TODO Auto-generated method stub

	}

}
