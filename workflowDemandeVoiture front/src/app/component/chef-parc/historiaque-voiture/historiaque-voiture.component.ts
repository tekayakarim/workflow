import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { ChefParkService } from "src/app/service/chef-park.service";
import { ToastrService } from "ngx-toastr";
import { TokenStorageService } from "src/app/service/token-storage.service";

@Component({
  selector: "app-historiaque-voiture",
  templateUrl: "./historiaque-voiture.component.html",
  styleUrls: ["./historiaque-voiture.component.scss"],
})
export class HistoriaqueVoitureComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = [
    "Type De Mission",
    "Employe",
    "Nombre Passagers",
    "Poids Autorise",
      "matricule voiture",
    "date de decharge voiture",
  ];
  elements: any = [];
  constructor(
    private chefParkService: ChefParkService,
    public toastr: ToastrService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.getAllDemandeVoiture();
  }

  getAllDemandeVoiture() {
    this.chefParkService
      .getHistoriqueDemandeVoitureByCurrentChef(
        this.tokenStorage.getUser().username
      )
      .subscribe((data) => {
        if (data) {
          console.warn(data);
          this.elements = data;
        }
        if (data.length == 0) {
          this.toastr.warning("aucune demande disponible", "", {
            timeOut: 25000,
          });
        }
      });
  }
}
