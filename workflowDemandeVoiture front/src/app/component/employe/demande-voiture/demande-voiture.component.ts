import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { DemandeVoiture } from "src/app/model/demande-voiture";
import { Employe } from "src/app/model/employe";
import { User } from "src/app/model/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { DemandeVoitureService } from "src/app/service/demande-voiture.service";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-demande-voiture",
  templateUrl: "./demande-voiture.component.html",
  styleUrls: ["./demande-voiture.component.scss"],
})
export class DemandeVoitureComponent implements OnInit {
  demandeVoiture: DemandeVoiture = new DemandeVoiture();
  employe: Employe = new Employe();
  user: User = new User();
  documentForm: FormGroup;
  constructor(
    public tokenStorage: TokenStorageService,
    public demandeVoitureService: DemandeVoitureService,
    public formBuilder: FormBuilder,
    public userService: UserService,
    public toastr: ToastrService,
    public router: Router
  ) {
    this.documentForm = this.formBuilder.group({
      description: ["", Validators.required],
      accompagants: ["", Validators.required],
      lieu_depart: ["", Validators.required],
      dataDebut: ["", Validators.required],
      temps_depart: ["", Validators.required],
      lieu_destination: ["", Validators.required],
      date_retour: ["", Validators.required],
      temps_retour: ["", Validators.required],

    });
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    console.warn(this.user);
    this.userService.getUser(this.user.username).subscribe(
      (data) => {
        console.warn("data =" + data);
        this.employe = data;
      },
      (ex) => {
        console.log(ex);
      }
    );
  }

  onSubmit() {

    this.demandeVoiture = this.documentForm.value;

    this.demandeVoiture.emp = this.employe;
    console.warn('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'+this.demandeVoiture.date_retour);
    this.demandeVoitureService.createDemande(this.demandeVoiture).subscribe(
      (data) => {
        if (data.includes("success")) {
          setTimeout(function () {
          //  window.location.reload();
          }, 700);
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
