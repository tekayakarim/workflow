import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { DemandePapier } from "src/app/model/demande-papier";
import { Employe } from "src/app/model/employe";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-demandes-papier-chef-hierarchique",
  templateUrl: "./demandes-papier-chef-hierarchique.component.html",
  styleUrls: ["./demandes-papier-chef-hierarchique.component.scss"],
})
export class DemandesPapierChefHierarchiqueComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = ["id", "type", "description", "utilisateur", "statut"];

  elements: DemandePapier[];
  constructor(
    private chefHierarchiqueService: ChefHierarchiqueService,
      public toastr: ToastrService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    /*  for (let i = 0; i < 10; i++) {
      let dem = new DemandePapier();
      let emp = new Employe();
      emp.id = i;
      emp.nom = "nom " + i;

      emp.prenom = "prenom " + i;
      dem.id = i;
      dem.type = "type " + i;
      dem.description = "des " + i;
      dem.emp = emp;

      this.elements.push(dem);
    }*/
    this.getDemandeChefHierarchique();
  }

  getDemandeChefHierarchique() {
    this.chefHierarchiqueService
      .getDemandeByCurrentChefHierarchique(this.tokenStorage.getUser().username)
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
