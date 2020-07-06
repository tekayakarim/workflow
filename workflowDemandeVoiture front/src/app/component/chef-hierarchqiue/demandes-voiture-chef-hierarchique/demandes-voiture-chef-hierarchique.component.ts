import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { DemandeVoiture } from "src/app/model/demande-voiture";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-demandes-voiture-chef-hierarchique",
  templateUrl: "./demandes-voiture-chef-hierarchique.component.html",
  styleUrls: ["./demandes-voiture-chef-hierarchique.component.scss"],
})
export class DemandesVoitureChefHierarchiqueComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = [ "CNRPS emp", "Lieu depart", "Lieu retour", "Date depart", "Date retour"];

  elements: DemandeVoiture[];
  constructor(
    private chefHierarchiqueService: ChefHierarchiqueService,
     public toastr: ToastrService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.getDemandeChefHierarchique();
  }

  getDemandeChefHierarchique() {
       this.chefHierarchiqueService
        .getDemandeVoitureByCurrentChefHierarchique(this.tokenStorage.getUser().username)
        .subscribe((data) => {
          if (data) {
            console.warn(data);
            this.elements = data;
          }
           if (data.length==0) {
                    this.toastr.warning("aucune demande disponible", "", { timeOut: 25000 });
                }
        });}
}
