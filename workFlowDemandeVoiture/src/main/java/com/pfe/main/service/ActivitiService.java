package com.pfe.main.service;
import java.util.List;
import org.activiti.engine.task.Task;

public interface ActivitiService {
	String startTheProcess(String assignee);
	String processInformation();
	List<Task> getTasks(String assignee);
	void completeTask(String taskId);
}
