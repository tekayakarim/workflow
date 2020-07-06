import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { DemandePapier } from "../model/demande-papier";
import { DemandeVoiture } from "../model/demande-voiture";
import { User } from "../model/user";
@Injectable({
  providedIn: "root",
})
export class ChefHierarchiqueService {
  private url = "http://localhost:9000" + "/main/chefHierarchique";
  constructor(public httpClient: HttpClient) {}

  /**
   * getDemandeByCurrentChefHierarchique
   */
  public getDemandeByCurrentChefHierarchique(
    username: String
  ): Observable<DemandePapier[]> {
    return this.httpClient.get<DemandePapier[]>(
      this.url + "/getAllDemandeDocument?userName=" + username
    );
  }
  /**
   * updateStatutDemandeDocument
   */
  public updateStatutDemandeDocument(
    id: number,
    statut: string
  ): Observable<any> {
    return this.httpClient.put<any>(
      this.url + "/updateStatutDemandeDocument?id=" + id + "&statut=" + statut,
      {
        responseType: "text",
      }
    );
  }
  /**
   * getAllChefHie
   */
  public getAllChefHie(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + "/getAllChefHierarchique");
  }
  /**
   * getChefHierarchiqueByCin
cin:string   */
  public getChefHierarchiqueByCin(cin: string) {
    return this.httpClient.get<User>(
      this.url + "/getChefHierarchiqueByCin?cin=" + cin
    );
  }
  /**
   * getDemandeByCurrentChefHierarchique
   */
  public getDemandeVoitureByCurrentChefHierarchique(
    username: String
  ): Observable<DemandeVoiture[]> {
    return this.httpClient.get<DemandeVoiture[]>(
      this.url + "/getAllDemandeVoiture?userName=" + username
    );
  }
  /**
   * updateStatutDemandeVoiture
   */
  public updateStatutDemandeVoiture(
    id: number,
    statut: number,
    motif : string
  ): Observable<any> {
    return this.httpClient.put<any>(
      this.url + "/updateStatutDemandeVoiture?id=" + id + "&statut=" + statut
      +"&motif="+ motif,
      {
        responseType: "text",
      }
    );
  }
}
