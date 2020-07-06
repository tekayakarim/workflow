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
import { DemandePapier } from "src/app/model/demande-papier";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { UserService } from "src/app/service/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.scss"],
})
export class AllComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = ["id", "type", "description", "action"];
  isEmpty = true;
  elements: DemandePapier[];
  username: String;

  previous: string;

  maxVisibleItems: number = 8;

  constructor(
    public demandeDocumentService: DemandeDocumentService,
    public toastr: ToastrService,
    public tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    console.warn(this.tokenStorage.loggedIn);
    this.getDemandeByCurrentUser();

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  getDemandeByCurrentUser() {
    this.username = this.tokenStorage.getUser().username;
    this.demandeDocumentService
      .getDemandeByCurrentUser(this.username)
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
