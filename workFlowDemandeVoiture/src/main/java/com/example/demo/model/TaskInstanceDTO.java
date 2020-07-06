package com.example.demo.model;

public class TaskInstanceDTO {

	private String id;
	private String name;
	private String processInstanceId;
	private String owner;
	private String assignee;
	private String processDefinitionId;
	private String processVariables;
	public TaskInstanceDTO(String id, String name, String processInstanceId, String owner, String assignee,
			String processDefinitionId, String processVariables) {
		super();
		this.id = id;
		this.name = name;
		this.processInstanceId = processInstanceId;
		this.owner = owner;
		this.assignee = assignee;
		this.processDefinitionId = processDefinitionId;
		this.processVariables = processVariables;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProcessInstanceId() {
		return processInstanceId;
	}
	public void setProcessInstanceId(String processInstanceId) {
		this.processInstanceId = processInstanceId;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getAssignee() {
		return assignee;
	}
	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}
	public String getProcessDefinitionId() {
		return processDefinitionId;
	}
	public void setProcessDefinitionId(String processDefinitionId) {
		this.processDefinitionId = processDefinitionId;
	}
	public String getProcessVariables() {
		return processVariables;
	}
	public void setProcessVariables(String processVariables) {
		this.processVariables = processVariables;
	}
	
	
}
