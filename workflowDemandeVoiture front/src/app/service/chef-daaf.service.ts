import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { DemandePapier } from "../model/demande-papier";
import { User } from '../model/user';
import { AgentDAAF } from 'src/app/model/agent-daaf';
@Injectable({
  providedIn: 'root'
})
export class ChefDAAFService {
  private url = "http://localhost:9000" + "/main/chefDAAF";
  constructor(public httpClient: HttpClient) { }

  /**
   * getAllAcceptedDemandeDocument
   */
  public getAllAcceptedDemandeDocument(username : String) {
    return this.httpClient.get<DemandePapier[]>(
      this.url + "/getAllAcceptedDemandeDocument?userName=" + username
    );
  }
  /**
   * getAllAgentLibreByChef
   */
  public getAllAgentLibreByChef(username : String) {
    return this.httpClient.get<AgentDAAF[]>(
      this.url + "/getAllAgentLibreByChef?userName=" + username
    );
  }
  /**
   * confierDemande
   */
  public confierDemande(idDemande : number ,idAgent : number) : Observable<any>{
    return this.httpClient.post<any>(this.url +
       "/confierDemande?idDemande="+idDemande+"&idAgent="+idAgent, {
      responseType: "text"
    });
  }
  /**
   * getAllChefDAAF
   */
  public getAllChefDAAF() : Observable<User[]>{
    return this.httpClient.get<User[]>(
      this.url + "/getAllChefDAAF"
    );
  }
  /**
   * getChefHierarchiqueByCin
cin:string   */
  public getChefDAAFByCin(cin:string) {
    return this.httpClient.get<User>(
      this.url + "/getChefDAAFByCin?cin="+cin
    );
  }
}
