import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(data): Observable<any> {
    return this.http.post("http://localhost:9000/main/sendMail", data, {
      responseType: "text",
    });
  }
}
