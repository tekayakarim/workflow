package com.example.demo.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.activiti.engine.FormService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.DemandeVoiture;
import com.example.demo.entity.Employe;
import com.example.demo.model.TaskInstanceDTO;
import com.example.demo.repository.EmployeRepository;
import com.example.demo.service.ActivitiService;
@Service
public class WorkFlowDemandeVoitureService implements ActivitiService {
	
	@Autowired
	EmployeRepository employeRepository;
	
	@Autowired
	private TaskService taskService;
	
	@Autowired
	private RepositoryService repositoryService;
	
	@Autowired
	private RuntimeService runtimeService;
	
	@Autowired
	private FormService formService;

	@Override
	public String startTheProcess(String assignee,DemandeVoiture demandeVoiture) {
		
		
		
		Employe employe=employeRepository.findByUserName(assignee);
		
	
		
		Map<String, Object> variables = new HashMap<>();
		variables.put("employe", employe);
		
		variables.put("id", demandeVoiture.getId());
		variables.put("nom_employe", demandeVoiture.getEmp().getNom());
		variables.put("prenom_employe", demandeVoiture.getEmp().getPrenom());
		variables.put("date_depart", demandeVoiture.getDataDebut());
		variables.put("lieu_depart", demandeVoiture.getLieu_depart());
		variables.put("temps_depart", demandeVoiture.getTemps_depart());
		variables.put("lieu_destination", demandeVoiture.getLieu_depart());
		variables.put("date_retour", demandeVoiture.getDate_retour());
		variables.put("temps_retour", demandeVoiture.getDate_retour());
		variables.put("accompagants", demandeVoiture.getAccompagants());
		variables.put("CNRPS", demandeVoiture.getEmp().getCNRPS());
		//variables.put("taskId", id);
		
		String id=runtimeService.startProcessInstanceByKey("worflowDemandeVoiture",variables).getDeploymentId();
		demandeVoiture.setTaskId(id);
		return processInformation();
	}

	@Override
	public String processInformation() {
		List<Task> taskList = taskService.createTaskQuery().orderByTaskCreateTime().asc().list();

		StringBuilder processAndTaskInfo = new StringBuilder();
		
		processAndTaskInfo.append("Number of process definition available: "
				+ repositoryService.createProcessDefinitionQuery().count() + " | Task Details= ");

		taskList.forEach(task -> {

			/*processAndTaskInfo.append("\n"+"ID: " + task.getId() + ", Name: " + task.getName() + ", Assignee: "
					+ task.getAssignee() + ", Description: "
					+task.getDescription()
					+" task id form : "
					+formService.getTaskFormData(task.getId()).getFormProperties()	
					);*/
			
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
