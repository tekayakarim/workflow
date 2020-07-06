import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { DemandePapier } from "../model/demande-papier";

@Injectable({
  providedIn: "root",
})
export class DemandeDocumentService {
  private url = "http://localhost:9000" + "/main/demandeDocument";
  //begin
  documents: DemandePapier[] = new Array();
  //end
  constructor(public httpClient: HttpClient) {}
  //begin
  add(doc: DemandePapier) {
    this.documents.push(doc);
  }
  //end
  public createDemande(demandePapier: DemandePapier): Observable<any> {
    return this.httpClient.post(this.url + "/add", demandePapier, {
      responseType: "text",
    });
  }
  /**
   * getDemandeByCurrentUser
   */
  public getDemandeByCurrentUser(
    username: String
  ): Observable<DemandePapier[]> {
    return this.httpClient.get<DemandePapier[]>(
      this.url + "/getByCurrentUser?userName=" + username
    );
  }

  public deleteDemande(id: number): Observable<any> {
    return this.httpClient.delete(this.url + "/delete?id=" + id, {
      responseType: "text",
    });
  }
  /**
   * updateDemande
demandePapier : DemandePapier   */
  public updateDemande(demandePapier: DemandePapier) {
    return this.httpClient.put(this.url + "/update", demandePapier, {
      responseType: "text",
    });
  }
  /**
   * getDemande
id:number :Observable<DemandePapier>  */
  public getDemande(id: number): Observable<DemandePapier> {
    return this.httpClient.get<DemandePapier>(this.url + "/get?id=" + id);
  }
}
