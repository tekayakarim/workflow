import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { DemandePapier } from "src/app/model/demande-papier";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { Employe } from "src/app/model/employe";

@Component({
  selector: "app-all-demandes-agent-daaf",
  templateUrl: "./all-demandes-agent-daaf.component.html",
  styleUrls: ["./all-demandes-agent-daaf.component.scss"],
})
export class AllDemandesAgentDaafComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = ["id", "type", "description", "utilisateur", "action"];

  elements: DemandePapier[] = [];
  username: String;

  constructor() {}
  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      let d = new DemandePapier();
      let emp = new Employe();
      emp.nom = "nom" + i;
      emp.prenom = "prenom" + i;
      d.emp = emp;
      d.id = i;
      d.statut = "status" + i;
      d.type = "demande-papier";
      d.description = "description " + i;
      this.elements.push(d);
    }
  }
}
