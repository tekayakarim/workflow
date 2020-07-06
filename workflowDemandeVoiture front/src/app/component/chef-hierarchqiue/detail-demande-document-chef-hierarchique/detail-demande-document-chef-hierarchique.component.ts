import { Component, OnInit } from "@angular/core";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DemandePapier } from "src/app/model/demande-papier";

@Component({
  selector: "app-detail-demande-document-chef-hierarchique",
  templateUrl: "./detail-demande-document-chef-hierarchique.component.html",
  styleUrls: ["./detail-demande-document-chef-hierarchique.component.scss"],
})
export class DetailDemandeDocumentChefHierarchiqueComponent implements OnInit {
  id;
  headElements = [
    "id",
    "type",
    "description",
    "nom utilisateur",
    "prenom utisatuer",
    "cin utilisatuer",
    "id utiliseur",
    "email utilisateur",
  ];
  dataElements = [];
  demandePapier: DemandePapier = new DemandePapier();
  constructor(
    private demandeDocumentService: DemandeDocumentService,
    private activatedroute: ActivatedRoute
  ) {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.demandeDocumentService.getDemande(this.id).subscribe((data) => {
      if (data) {
        console.warn("data = == = " + data.type);
        this.dataElements = [
          data.id,
          data.type,
          data.description,
          data.emp.nom,
          data.emp.prenom,
          data.emp.cin,
          data.emp.id,
          data.emp.email,
        ];
      }
    });
  }

  ngOnInit(): void {}
}
