import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { Router } from "@angular/router";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
@Component({
  selector: "app-refuse-confirmation-modal",
  templateUrl: "./refuse-confirmation-modal.component.html",
  styleUrls: ["./refuse-confirmation-modal.component.scss"],
})
export class RefuseConfirmationModalComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private chefHierarchiqueService: ChefHierarchiqueService,
    private demandeDocumentService: DemandeDocumentService,
    private email: EmailService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  refuseDemande(id) {
    this.chefHierarchiqueService
      .updateStatutDemandeDocument(id, "denied")
      .subscribe(
        (data) => {},
        (ex) => {}
      );
      let data;
      this.demandeDocumentService.getDemande(id).subscribe((d) => {
        data = d;
        console.warn("email = " + data.emp.email);
        this.email
          .sendEmail(
            new Email(
              data.emp.email,
              "denied",
              "<h3>demande document <b style='color:red'>refusé </b> par votre chef hierarchique <br>  detail demande:<br> " +"description: <br>"
              + data.description +"<br> type: <br>"+ data.type+"</h3>"
            )
          )
          .subscribe((data) => console.warn(data));
        this.router.navigateByUrl("/demandes-papier-chef-hierarchique");
      });
    this.toastr
      .success("Demande refusé", "id = " + id, { timeOut: 700 })
      .onHidden.subscribe(() => {
        this.router.navigateByUrl("demandes-papier-chef-hierarchique");
      });
  }
}
