package com.example.demo.service;
import java.util.List;
import org.activiti.engine.task.*;

import com.example.demo.entity.DemandeVoiture;
import com.example.demo.model.TaskInstanceDTO;

public interface ActivitiService {

	String processInformation();
	List<Task> getTasks(String assignee);
	void completeTask(String taskId);
	String startTheProcess(String assignee, DemandeVoiture demandeVoiture);
}
