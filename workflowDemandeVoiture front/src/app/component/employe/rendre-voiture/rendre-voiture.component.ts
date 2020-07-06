import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChefParkService } from "src/app/service/chef-park.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { ToastrService } from "ngx-toastr";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
@Component({
  selector: 'app-rendre-voiture',
  templateUrl: './rendre-voiture.component.html',
  styleUrls: ['./rendre-voiture.component.scss']
})
export class RendreVoitureComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = [
    "Matricule",
    "Nombre de Chevaux",
    "Couleur",
    "Poids Autorise",
    "nombre de Passagers",
    "Disponible",
    "Rendre Voiture"
  ];
  elementsDemande: any =[];

  constructor(
    public demandeVoitureService: DemandeVoitureService,
    public tokenStorage: TokenStorageService,
    public toastr: ToastrService,
  ) { }

  ngOnInit(): void {
      this.getDemandeInProgressByCurrentUser();
  }

  getDemandeInProgressByCurrentUser() {
    this.demandeVoitureService
      .getDemandeInProgressByCurrentUser(this.tokenStorage.getUser().username)
      .subscribe((data) => {
        if (data) {
          console.warn(data);
          this.elementsDemande = data;

        }
           if (data.length==0) {
                this.toastr.warning("aucune voiture a ma possesion", "", { timeOut: 25000 });
                }
      });
  }
}
