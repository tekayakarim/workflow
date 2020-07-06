import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DemandePapier } from "src/app/model/demande-papier";
import { ToastrService } from "ngx-toastr";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-modifier-demande",
  templateUrl: "./modifier-demande.component.html",
  styleUrls: ["./modifier-demande.component.scss"],
})
export class ModifierDemandeComponent implements OnInit {
  id: String;
  demandePapier: DemandePapier = new DemandePapier();
  documentForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private demandeDocumentService: DemandeDocumentService,
    private activatedroute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.documentForm = new FormGroup({
      nom: new FormControl({
        disabled: true,
      }),
      prenom: new FormControl({
        disabled: true,
      }),
      cin: new FormControl({
        disabled: true,
      }),
      description: new FormControl(),
      type: new FormControl(),
    });
    this.get(parseFloat(this.id.toString()));
  }

  ngOnInit(): void {
    console.warn("id === " + this.id);
  }

  modify() {
    //this.toastr.warning("eeeee");
    this.demandePapier.description = this.documentForm.value.description;
    this.demandePapier.type = this.documentForm.value.type;
    this.demandeDocumentService.updateDemande(this.demandePapier).subscribe(
      (data) => {
        this.router.navigateByUrl("/mes-demandes-papier/all");

        if (data.includes("success")) {
          //    window.location.reload();
          console.warn(data);
          this.toastr.success("demande document modifier", "", {
            timeOut: 6000,
          });
        } else {
          this.toastr.warning("Erreur: " + data, "", { timeOut: 3000 });
        }
      },
      (ex) => {
        console.log(ex);
        this.toastr.warning("Erreur", "", { timeOut: 3000 });
      }
    );
    if (this.demandePapier.statut == "toCheck") {
      this.demandeDocumentService.add(this.demandePapier);
      this.demandeDocumentService.createDemande(this.demandePapier).subscribe(
        (data) => {
          if (data.includes("success")) {
            setTimeout(function () {
              window.location.reload();
            }, 3000);
            console.warn(data);
            this.toastr.success("Ajouté avec succes", "", { timeOut: 3000 });
          }
        },
        (ex) => {
          console.log(ex);
          this.toastr.warning("Erreur", "", { timeOut: 3000 });
        }
      );
    }
  }

  get(id: number): DemandePapier {
    this.demandeDocumentService.getDemande(id).subscribe(
      (data) => {
        if (data) {
          this.demandePapier = data;
          this.documentForm = new FormGroup({
            nom: new FormControl({
              value: data.emp.nom,
              disabled: true,
            }),
            prenom: new FormControl({
              value: data.emp.prenom,
              disabled: true,
            }),
            cin: new FormControl({
              value: data.emp.cin,
              disabled: true,
            }),
            description: new FormControl(data.description),
            type: new FormControl(data.type),
          });
          console.warn("zzzzzz " + data.type);
          return data;
        }
      },
      (ex) => {
        console.log(ex);
      }
    );
    return null;
  }
}
