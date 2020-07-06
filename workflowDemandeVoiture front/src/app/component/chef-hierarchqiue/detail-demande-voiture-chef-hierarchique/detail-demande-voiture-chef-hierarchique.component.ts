import { Component, OnInit } from "@angular/core";
import { DemandeVoiture } from "src/app/model/demande-voiture";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-demande-voiture-chef-hierarchique",
  templateUrl: "./detail-demande-voiture-chef-hierarchique.component.html",
  styleUrls: ["./detail-demande-voiture-chef-hierarchique.component.scss"],
})
export class DetailDemandeVoitureChefHierarchiqueComponent implements OnInit {
  id;
  headElements = [
    "cnrps employe",
    "dataDebut",
    "description",
    "lieu_depart",
    "temps_depart",
    "lieu_destination",
    "date_retour",
    "temps_retour",
    "accompagants",
  ];
  dataElements = [];
  constructor(
    private demandeVoitureService: DemandeVoitureService,
    private activatedroute: ActivatedRoute
  ) {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.demandeVoitureService.getDemande(this.id).subscribe((data) => {
      if (data) {
        this.dataElements = [
          data.emp.cnrps,
          data.dataDebut,
          data.description,
          data.lieu_depart,
          data.temps_depart,
          data.lieu_destination,
          data.date_retour,
          data.temps_retour,
          data.accompagants,
        ];
      }
    });
  }

  ngOnInit(): void {}
}
