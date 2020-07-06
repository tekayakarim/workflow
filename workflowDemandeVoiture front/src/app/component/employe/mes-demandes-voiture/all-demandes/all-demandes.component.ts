import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { DemandeVoiture } from "src/app/model/demande-voiture";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-all-demandes',
  templateUrl: './all-demandes.component.html',
  styleUrls: ['./all-demandes.component.scss']
})
export class AllDemandesComponent implements OnInit {

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = ["id", "type de mission", "description", "passergers" ,"poids","action"];

  elements: DemandeVoiture[];
  username: String;

  previous: string;

  maxVisibleItems: number = 8;
  constructor(
    public demandeVoitureService: DemandeVoitureService,
    public tokenStorage: TokenStorageService,
    public toastr: ToastrService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.warn(this.tokenStorage.loggedIn);
    this.getDemandeByCurrentUser();

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }
  getDemandeByCurrentUser() {
    this.username = this.tokenStorage.getUser().username;
    this.demandeVoitureService
      .getDemandeByCurrentUser(this.username)
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
