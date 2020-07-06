import { Component, OnInit, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-delete-confirmation-modal-voiture",
  templateUrl: "./delete-confirmation-modal-voiture.component.html",
  styleUrls: ["./delete-confirmation-modal-voiture.component.scss"],
})
export class DeleteConfirmationModalVoitureComponent implements OnInit {
  @Input("id") id: number;
  constructor(
    private toastr: ToastrService,
    private demandeVoitureService: DemandeVoitureService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  delete(id) {

    this.demandeVoitureService.deleteDemande(id).subscribe(
      (data) => {
        this.router.navigateByUrl("/mes-demandes-voiture/all-demandes");

        if (data) {
          console.warn(data);
          let text = data;
        //  console.log(text);

          if (text.includes("cannot")) {
            this.toastr
              .warning(data, "", {
                timeOut: 5000,
              })
              .onHidden.subscribe(() => {});
          } else {
            this.toastr
              .success("demande Voiture id=" + id + " effacer", "", {
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
