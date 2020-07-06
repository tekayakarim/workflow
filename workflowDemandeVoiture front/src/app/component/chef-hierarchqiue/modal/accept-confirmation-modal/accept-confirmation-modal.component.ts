import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { EmailService } from "src/app/service/email.service";
import { DemandePapier } from "src/app/model/demande-papier";
import { Email } from "src/app/model/email";
import { Router } from "@angular/router";
@Component({
  selector: "app-accept-confirmation-modal",
  templateUrl: "./accept-confirmation-modal.component.html",
  styleUrls: ["./accept-confirmation-modal.component.scss"],
})
export class AcceptConfirmationModalComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private chefHierarchiqueService: ChefHierarchiqueService,
    private demandeDocumentService: DemandeDocumentService,
    private email: EmailService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  acceptDemande(id) {
    this.chefHierarchiqueService
      .updateStatutDemandeDocument(id, "accepted")
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
            "accetped",
            "<h3>demande document"+" <b style='color:green'>accepté </b> "+"par votre chef hierarchique <br>  detail demande:<br> " +"description: <br>"
            + data.description +"<br> type: <br>"+ data.type+"</h3>"
          )
        )
        .subscribe((data) => console.warn(data));
      this.router.navigateByUrl("/demandes-papier-chef-hierarchique");
    });

    this.toastr
      .success("Demande accepté", "id = " + id, { timeOut: 700 })
      .onHidden.subscribe(() => {
        window.location.reload();
      });
  }
}
