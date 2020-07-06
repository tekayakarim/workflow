import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  HostListener,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { DemandeVoiture } from "src/app/model/demande-voiture";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { TokenStorageService } from "src/app/service/token-storage.service";

function navs() {
  var header = document.getElementById("linksVoiture");
  var btns = header.getElementsByClassName("nav-item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = header.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
@Component({
  selector: "app-mes-demandes-voiture",
  templateUrl: "./mes-demandes-voiture.component.html",
  styleUrls: ["./mes-demandes-voiture.component.scss"],
})
export class MesDemandesVoitureComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  elements: DemandeVoiture[] = [];
  username: String;

  previous: string;

  maxVisibleItems: number = 8;

  constructor(
    public demandeVoitureService: DemandeVoitureService,
    public tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    navs();
  }
}
