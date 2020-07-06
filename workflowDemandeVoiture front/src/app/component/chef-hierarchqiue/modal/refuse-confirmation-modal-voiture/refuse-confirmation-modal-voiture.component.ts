import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { Router } from "@angular/router";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
@Component({
  selector: "app-refuse-confirmation-modal-voiture",
  templateUrl: "./refuse-confirmation-modal-voiture.component.html",
  styleUrls: ["./refuse-confirmation-modal-voiture.component.scss"],
})
export class RefuseConfirmationModalVoitureComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private chefHierarchiqueService: ChefHierarchiqueService,
    private router: Router,
    private demandeVoitureService: DemandeVoitureService,
    private email: EmailService)
     {}

  ngOnInit(): void {}

  refuseDemande(id) {
    this.chefHierarchiqueService
      .updateStatutDemandeVoiture(id, 0,null)
      .subscribe(
        (data) => {},
        (ex) => {}
      );

      this.demandeVoitureService.getDemande(id).subscribe((data) => {

        this.email
          .sendEmail(
            new Email(
              data.emp.email,
              "denied",
              "<h3>demande voiture"+" <b style='color:red'>refuse </b> "
              +"par votre chef hierarchique <br>  detail demande:<br> "
              +"description: <br>"
              + data.description
              +"<br> type de mission: <br>"
              + data.typeMission
              +"<br> date de debut mission: <br>"
              + data.dataDebut
              +"<br> date de fin mission: <br>"
              + data.dataFin
              +"</h3>"
            )
          )
          .subscribe((data) => console.warn(data));
        this.router.navigateByUrl("/demandes-voiture-chef-hierarchique");
      });

      this.toastr
        .success("Demande refuse", "id = " + id, { timeOut: 700 })
        .onHidden.subscribe(() => {
          window.location.reload();
        });
  }
}
