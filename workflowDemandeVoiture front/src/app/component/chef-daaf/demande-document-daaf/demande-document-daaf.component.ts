import { Component, OnInit } from "@angular/core";
import { Employe } from "src/app/model/employe";
import { element } from "protractor";
import { DemandePapier } from "src/app/model/demande-papier";
import { ChefDAAFService } from "src/app/service/chef-daaf.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-demande-document-daaf",
  templateUrl: "./demande-document-daaf.component.html",
  styleUrls: ["./demande-document-daaf.component.scss"],
})
export class DemandeDocumentDaafComponent implements OnInit {
  emp = new Employe();
  headElements = ["id", "type", "description", "assigner"];

  elements = [];
  constructor(private chefDAAFService :ChefDAAFService,
     public toastr: ToastrService,
      private tokenStorage: TokenStorageService) {
  /*  this.emp.nom = "hedi";
    this.emp.prenom = "hedi";
    this.emp.id = 5;
    for (let i = 0; i < 10; i++) {
      let p = new DemandePapier();
      p.id = i;
      p.type = "type " + i;
      p.description = "description " + i;
      this.elements.push(p);
    }*/
  }

  ngOnInit(): void {this.getAllAcceptedDemandeDocument();}

  getAllAcceptedDemandeDocument() {
    this.chefDAAFService
      .getAllAcceptedDemandeDocument(this.tokenStorage.getUser().username)
      .subscribe((data) => {
        if (data) {
          console.warn(data);
          this.elements = data;
        }
        if (data.length==0) {
                   this.toastr.warning("aucune demande disponible", "", { timeOut: 25000 });
               }
      });
  }
}
