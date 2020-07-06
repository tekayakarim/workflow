import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChefParkService } from "src/app/service/chef-park.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-mes-voitures',
  templateUrl: './mes-voitures.component.html',
  styleUrls: ['./mes-voitures.component.scss']
})
export class MesVoituresComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = [
    "Matricule",
    "Nombre de Chevaux",
    "Couleur",
    "Poids Autorise",
    "nombre Passagers",
    "Disponible",
  ];
  elements: any =[];
  constructor(
    private chefParkService: ChefParkService,
     public toastr: ToastrService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getAllVoiture();
  }

getAllVoiture(){
  this.chefParkService
   .getVoitureByCurrentChefPark(this.tokenStorage.getUser().username)
   .subscribe((data) => {
     if (data) {
       console.warn(data);
       this.elements = data;
     }
     if (data.length==0) {
                  this.toastr.warning("aucune voiture disponible", "", { timeOut: 25000 });
              }
   });
}
}
