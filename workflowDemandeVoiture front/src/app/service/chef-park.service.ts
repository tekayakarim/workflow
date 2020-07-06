import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { DemandeVoiture } from "../model/demande-voiture";
import { Voiture } from "../model/voiture";
@Injectable({
  providedIn: "root",
})
export class ChefParkService {
  private url = "http://localhost:9000" + "/main/chefPark";
  constructor(public httpClient: HttpClient) {}

  public getDemandeByCurrentChefPark(
    username: String
  ): Observable<DemandeVoiture[]> {
    return this.httpClient.get<DemandeVoiture[]>(
      this.url + "/getAllAcceptedDemandeVoiture?userName=" + username
    );
  }
  /**
    * addVoiture
username: String,voiture: Voiture    */
  public addVoiture(username: String, voiture: Voiture): Observable<any> {
    return this.httpClient.post<any>(
      this.url + "/addVoiture?userName=" + username,
      voiture
    );
  }

  public getVoitureByCurrentChefPark(username: String): Observable<Voiture[]> {
    return this.httpClient.get<Voiture[]>(
      this.url + "/getAllVoiture?userName=" + username
    );
  }
  public getAllAcceptedVoitureByCurrentChefPark(
    username: String
  ): Observable<Voiture[]> {
    return this.httpClient.get<Voiture[]>(
      this.url + "/getAllAcceptedDemandeVoiture?userName=" + username
    );
  }
  public getVoitureDispoByCurrentChefPark(
    username: String
  ): Observable<Voiture[]> {
    return this.httpClient.get<Voiture[]>(
      this.url + "/getAllVoitureDispo?userName=" + username
    );
  }
  /**
   * assignVoiture(idVoiture,idDemande)*/
  public assignVoiture(idVoiture: number, idDemande: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("idVoiture", idVoiture.toString());
    params = params.append("idDemande", idDemande.toString());
    return this.httpClient.put<any>(
      this.url +
        "/assignVoiture?idVoiture=" +
        idVoiture +
        "&idDemande=" +
        idDemande,
      { params: params }
    );
  }
  /**
   * getHistoriqueDemandeVoitureByCurrentChef
username: String :Observable<DemandeVoiture[]>  */
  public getHistoriqueDemandeVoitureByCurrentChef(username: String):Observable<DemandeVoiture[]> {
    return this.httpClient.get<DemandeVoiture[]>(
      this.url + "/getHistoriqueDemandeVoitureByCurrentChef?userName=" + username
    );
  }
}
