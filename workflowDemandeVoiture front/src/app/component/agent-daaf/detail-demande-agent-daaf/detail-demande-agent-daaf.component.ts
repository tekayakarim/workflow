import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MdbTableDirective,
  MdbTablePaginationComponent,
} from "angular-bootstrap-md";
import { DemandePapier } from "src/app/model/demande-papier";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { ActivatedRoute } from "@angular/router";
import { Employe } from "src/app/model/employe";
import { AgentDAAFService } from "src/app/service/agent-daaf.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-detail-demande-agent-daaf",
  templateUrl: "./detail-demande-agent-daaf.component.html",
  styleUrls: ["./detail-demande-agent-daaf.component.scss"],
})
export class DetailDemandeAgentDaafComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild("row", { static: true }) row: ElementRef;

  headElements = [
    "id",
    "type",
    "description",
    "nom utilisateur",
    "prenom utilisateur",
    "cin utilisateur",
    "id utilisateur",
  ];
  dataElements = [];
  demandePapier: DemandePapier = new DemandePapier();
  constructor(
    private agentService: AgentDAAFService,
     public toastr: ToastrService,
    private tokenStorage: TokenStorageService
  ) {}
agentId=this.tokenStorage.getUser().id;
  ngOnInit(): void {this.getDemande();}
  getDemande(){
    this.agentService
      .getDemandeDaaf(this.tokenStorage.getUser().username)
      .subscribe((e) => {
        if (e==null) {
                  this.toastr.warning("aucune demande disponible", "", { timeOut: 25000 });
              }

        this.demandePapier=e;
        console.log(this.demandePapier);

        this.dataElements = [
          this.demandePapier.id,
          this.demandePapier.type,
          this.demandePapier.description,
        this.demandePapier.emp.nom,
      this.demandePapier.emp.prenom,
        this.demandePapier.emp.cin,
        this.demandePapier.emp.id
        ];
      });
  }
}
