import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { AgentDAAF } from "src/app/model/agent-daaf";
import { DemandePapier } from "../model/demande-papier";
@Injectable({
  providedIn: "root",
})
export class AgentDAAFService {
  private url = "http://localhost:9000" + "/main/agentDAAF";
  constructor(public httpClient: HttpClient) {}

  /**
   * getAgent
id: number   */
  public getAgent(id: number): Observable<AgentDAAF> {
    return this.httpClient.get<AgentDAAF>(this.url + "/getAgent?id=" + id);
  }
  /**
   * get demande
   */
  public getDemandeDaaf(username: String): Observable<DemandePapier> {
    return this.httpClient.get<DemandePapier>(
      this.url + "/demandeToDo?userName=" + username
    );
  }
  /**
   * demandeDone
username: string,id: string :Observable<any>  */
  public demandeDone(username: String,id: string):Observable<any> {
    return this.httpClient.get<any>(this.url +
       "/demandeDone?userName="+username+"&id="+id);
  }
  /**
   * taskToDo
username: string :Observable<any>  */
  public taskToDo(username: String):Observable<any> {
    return this.httpClient.get<any>(this.url +
       "/taskToDo?userName="+username);
  }
  /**
   * getAgentByUserName
id: number   */
  public getAgentByUserName(username: String): Observable<AgentDAAF> {
    return this.httpClient.get<AgentDAAF>(this.url + "/getAgentByUserName?userName=" + username);
  }
}
