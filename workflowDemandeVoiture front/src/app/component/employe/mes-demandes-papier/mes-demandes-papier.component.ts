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
import { DemandePapier } from "src/app/model/demande-papier";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { TokenStorageService } from "src/app/service/token-storage.service";

function navs() {
  var header = document.getElementById("links");
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
  selector: "app-mes-demandes-papier",
  templateUrl: "./mes-demandes-papier.component.html",
  styleUrls: ["./mes-demandes-papier.component.scss"],
})
export class MesDemandesPapierComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = ["id", "type", "description", "action"];

  elements: DemandePapier[] = [];
  username: String;

  previous: string;

  maxVisibleItems: number = 8;

  constructor(
    public demandeDocumentService: DemandeDocumentService,
    public tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    navs();
  }

  getDemandeByCurrentUser() {
    this.username = this.tokenStorage.getUser().username;
    this.demandeDocumentService
      .getDemandeByCurrentUser(this.username)
      .subscribe((data) => {
        if (data) {
          console.warn(data);
          this.elements = data;
        } else {
        }
      });
  }
}
