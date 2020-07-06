import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { DemandeVoiture } from "src/app/model/demande-voiture";
//import { Employe } from "src/app/model/employe";
import { ChefParkService } from "src/app/service/chef-park.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-demande-voiture-chef-parc",
  templateUrl: "./demande-voiture-chef-parc.component.html",
  styleUrls: ["./demande-voiture-chef-parc.component.scss"],
})
export class DemandeVoitureChefParcComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = ["type", "employe", "statut", "nbpassager", "poids", "action"];

  elements: DemandeVoiture[] = [];
  constructor(
    private chefParkService: ChefParkService,
    public toastr: ToastrService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
/*   for (let i = 0; i < 10; i++) {
      let dem = new DemandeVoiture();
      let emp = new Employe();
      emp.id = i;
      emp.nom = "nom " + i;

      emp.prenom = "prenom " + i;
      dem.id = i;
      dem.nbPassergers = i;
      dem.poids = i;
      dem.statut = "statut" + i;
      dem.dataDebut = i + "/" + i + "/" + i;
      dem.dataDebut = i + "/" + i + "/" + i;
      dem.typeMission = "type " + i;
      dem.description = "des " + i;
      dem.emp = emp;

      this.elements.push(dem);
    }*/
    this.getDemandeVoitureChefParc();
  }

  getDemandeVoitureChefParc() {
    this.chefParkService
     .getDemandeByCurrentChefPark(this.tokenStorage.getUser().username)
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
