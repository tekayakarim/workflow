package com.pfe.main.service;

import com.pfe.main.entity.AgentDAAF;
import com.pfe.main.entity.DemandeDocument;

public interface AgentDAAFService {
DemandeDocument getDemandeToDo(String userName);
String getTaskToDo(String userName);
String DemandeDone(String userName,String id);
AgentDAAF getAgent(long id);
AgentDAAF getAgentByUserName(String userName);
}
