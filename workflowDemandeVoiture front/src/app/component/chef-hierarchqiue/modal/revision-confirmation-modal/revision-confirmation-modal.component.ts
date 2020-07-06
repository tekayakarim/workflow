import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { Router } from "@angular/router";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
@Component({
  selector: "app-revision-confirmation-modal",
  templateUrl: "./revision-confirmation-modal.component.html",
  styleUrls: ["./revision-confirmation-modal.component.scss"],
})
export class RevisionConfirmationModalComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private chefHierarchiqueService: ChefHierarchiqueService,
    private demandeDocumentService: DemandeDocumentService,
    private email: EmailService,
    private router: Router
  ) {}
remarque:string;
  ngOnInit(): void {}
onBlurMethod(value:any){this.remarque=value;}
  revisionDemande(id) {
    this.chefHierarchiqueService
      .updateStatutDemandeDocument(id, "toCheck")
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
              "to check",
              "<h3>demande document <b style='color:#FFD700'>a revise </b> remarque: <b style='color:green'> "
              +this.remarque
              +" </b> <br>  detail demande:<br> "
              +"description: <br>"
              + data.description
              +"<br> type: <br>"
              + data.type+"</h3>"
            )
          )
          .subscribe((data) => console.warn(data));
        this.router.navigateByUrl("/demandes-papier-chef-hierarchique");
      });
    this.toastr
      .success("Demande a reviser", "id = " + id, { timeOut: 700 })
      .onHidden.subscribe(() => {
        this.router.navigateByUrl("demandes-papier-chef-hierarchique");
      });
  }
}
