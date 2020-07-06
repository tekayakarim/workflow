import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { DemandeVoiture } from "../model/demande-voiture";
@Injectable({
  providedIn: 'root'
})
export class DemandeVoitureService {
  private url = "http://localhost:9000" + "/main/demandeVoiture";

  constructor(public httpClient: HttpClient) { }

  public createDemande(demandeVoiture: DemandeVoiture): Observable<any> {
    return this.httpClient.post(this.url + "/add", demandeVoiture, {
      responseType: "text",
    });
  }
  public deleteDemande(id: number): Observable<any> {
    return this.httpClient.delete(this.url + "/delete?id=" + id, {
      responseType: "text",
    });
  }
  public updateDemande(demandeVoiture: DemandeVoiture) {
    return this.httpClient.put(this.url + "/update", demandeVoiture, {
      responseType: "text",
    });
  }
  public getDemande(id: number): Observable<DemandeVoiture> {
    return this.httpClient.get<DemandeVoiture>(this.url + "/get?id=" + id);
  }
  public getDemandeByCurrentUser(username: String): Observable<DemandeVoiture[]> {
    return this.httpClient.get<DemandeVoiture[]>(
      this.url + "/getByCurrentUser?userName=" + username
    );
  }
  /**
   * getDemandeInProgressByCurrentUser
username: String :Observable<DemandeVoiture[]>  */
  public getDemandeInProgressByCurrentUser(username: String):Observable<DemandeVoiture[]> {
    return this.httpClient.get<DemandeVoiture[]>(
      this.url + "/getDemandeInProgressByCurrentUser?userName=" + username
    );
  }

  public rendreVoiture(idDemande: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("idDemande", idDemande.toString());
    return this.httpClient.put<any>(
      this.url +
        "/rendreVoiture?idDemande=" +
        idDemande,
      { params: params }
    );
  }
}
