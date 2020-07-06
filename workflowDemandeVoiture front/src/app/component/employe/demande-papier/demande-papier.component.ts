import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { DemandePapier } from "src/app/model/demande-papier";
import { Employe } from "src/app/model/employe";
import { User } from "src/app/model/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { DemandeDocumentService } from "src/app/service/demande-document.service";
import { UserService } from "src/app/service/user.service";

function lang() {
  document.getElementById("idFr").addEventListener("click", () => {
    document.getElementById("formArabe").style.display = "none";
    document.getElementById("formFr").style.display = "block";
    document.getElementById("titre").innerHTML = "Ajouter une demande";
    document.getElementById("idAr").classList.remove("active");
    document.getElementById("idFr").classList.add("active");
  });

  document.getElementById("idAr").addEventListener("click", () => {
    document.getElementById("formArabe").style.display = "block";
    document.getElementById("formFr").style.display = "none";
    document.getElementById("idFr").classList.remove("active");
    document.getElementById("idAr").classList.add("active");
    document.getElementById("titre").innerHTML = "طلب ورقة إدارية";
  });
}

@Component({
  selector: "app-demande-papier",
  templateUrl: "./demande-papier.component.html",
  styleUrls: ["./demande-papier.component.scss"],
})
export class DemandePapierComponent implements OnInit {
  demandePapier: DemandePapier = new DemandePapier();
  employe: Employe = new Employe();
  user: User = new User();
  documentForm: FormGroup;
  documentFormArabe: FormGroup;
  constructor(
    public tokenStorage: TokenStorageService,
    public demandePapierService: DemandeDocumentService,
    public formBuilder: FormBuilder,
    public userService: UserService,
    public toastr: ToastrService,
    public router: Router
  ) {
    this.documentForm = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      description: ["", Validators.required],
      type: ["", Validators.required],
    });
    this.documentFormArabe = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      descriptionArabe: ["", Validators.required],
      typeArabe: ["", Validators.required],
    });
  }

  get f() {
    return this.documentForm.controls;
  }

  get a() {
    return this.documentFormArabe.controls;
  }

  ngOnInit(): void {
    lang();
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
    if (this.f.description.errors) this.toastr.error("Ajouter une description");
    if (this.f.type.errors) this.toastr.error("Ajouter un type");
    if (!this.f.description.errors && !this.f.type.errors) {
      this.demandePapier.emp = this.employe;
      this.demandePapier.description = this.documentForm.value.description;
      this.demandePapier.type = this.documentForm.value.type;
      this.demandePapier.langue = "francais";
      console.warn(this.demandePapier);
      this.demandePapierService.add(this.demandePapier);
      this.demandePapierService.createDemande(this.demandePapier).subscribe(
        (data) => {
          if (data.includes("success")) {
            setTimeout(function () {
              window.location.reload();
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
  onSubmitArabe() {
    if (this.a.descriptionArabe.errors)
      this.toastr.warning("Ajouter une description");
    if (this.a.typeArabe.errors) this.toastr.warning("Ajouter un type");
    if (!this.a.descriptionArabe.errors && !this.a.typeArabe.errors) {
      this.demandePapier.emp = this.employe;
      this.demandePapier.description = this.documentFormArabe.value.descriptionArabe;
      this.demandePapier.type = this.documentFormArabe.value.typeArabe;
      this.demandePapier.langue = "arabe";
      console.warn(this.demandePapier);
      this.demandePapierService.add(this.demandePapier);
      this.demandePapierService.createDemande(this.demandePapier).subscribe(
        (data) => {
          if (data.includes("success")) {
            setTimeout(function () {
              window.location.reload();
            }, 1000);
            console.warn(data);
            this.toastr.success("Ajouté avec succes", "", { timeOut: 2000 });
          }
        },
        (ex) => {
          console.log(ex);
          this.toastr.warning("Erreur", "", { timeOut: 3000 });
        }
      );
    }
  }
}
