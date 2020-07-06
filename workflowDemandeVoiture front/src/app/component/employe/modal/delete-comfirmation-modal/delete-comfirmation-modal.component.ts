import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-delete-comfirmation-modal",
  templateUrl: "./delete-comfirmation-modal.component.html",
  styleUrls: ["./delete-comfirmation-modal.component.scss"],
})
export class DeleteComfirmationModalComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private demandeDocumentService: DemandeDocumentService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  delete(id) {
    this.demandeDocumentService.deleteDemande(id).subscribe(
      (data) => {
        this.router.navigateByUrl("/mes-demandes-papier/all");

        if (data) {
          console.warn(data);
          let text = data;
          if (text.includes("cannot")) {
            this.toastr
              .warning(data, "", {
                timeOut: 5000,
              })
              .onHidden.subscribe(() => {});
          } else {
            this.toastr
              .success("demande document id=" + id + " effacer", "", {
                timeOut: 700,
              })
              .onHidden.subscribe(() => {
                window.location.reload();
              });
          }
        }
      },
      (ex) => {
        console.log(ex);
        this.toastr.warning("Erreur", "", { timeOut: 3000 });
      }
    );
  }
}
