import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { Router } from "@angular/router";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
@Component({
  selector: "app-revision-confirmation-modal-voiture",
  templateUrl: "./revision-confirmation-modal-voiture.component.html",
  styleUrls: ["./revision-confirmation-modal-voiture.component.scss"],
})
export class RevisionConfirmationModalVoitureComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private chefHierarchiqueService: ChefHierarchiqueService,
    private demandeVoitureService: DemandeVoitureService,
    private email: EmailService,
    private router: Router
  ) {}

remarque:string;
onBlurMethod(value:any){this.remarque=value;}
  ngOnInit(): void {}

  revisionDemande(id) {
    this.chefHierarchiqueService
      .updateStatutDemandeVoiture(id, -2,this.remarque)
      .subscribe(
        (data) => {},
        (ex) => {}
      );
      let data;

    this.toastr
      .success("Demande a reviser", "id = " + id, { timeOut: 700 })
      .onHidden.subscribe(() => {
        this.router.navigateByUrl("demandes-voiture-chef-hierarchique");
      });
  }
}
