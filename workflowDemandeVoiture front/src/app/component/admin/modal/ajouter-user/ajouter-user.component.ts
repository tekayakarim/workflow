import { Component, OnInit, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ChefDAAFService } from "src/app/service/chef-daaf.service";
import { ChefHierarchiqueService } from "src/app/service/chef-hierarchique.service";
import { User } from "src/app/model/user";
import { LoginService } from "src/app/service/login.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-ajouter-user",
  templateUrl: "./ajouter-user.component.html",
  styleUrls: ["./ajouter-user.component.scss"],
})
export class AjouterUserComponent implements OnInit {
  userForm: FormGroup;
  isEmploye = false;
  isAgent = false;
  elementsChefDAAF: User[] = [];
  elementsChefHie: User[] = [];
  constructor(
    public formBuilder: FormBuilder,
    private chefHierarchiqueService: ChefHierarchiqueService,
    private chefDAAFService: ChefDAAFService,
    private loginService: LoginService,
    public toastr: ToastrService
  ) {
    this.userForm = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      userName: ["", Validators.required],
      cin: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      role: ["", Validators.required],
      chefHierarchiqueCin: [null, Validators.required],
      chefDAAFCin: [null, Validators.required],
    });
  }

  get f() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.recupereChefHierarchique();
    this.recupereChefDAAF();
    this.isEmploye = false;
    this.isAgent = false;
  }
  onSubmit() {
    if (this.f.nom.errors) this.toastr.error("Ajouter un nom");
    if (this.f.prenom.errors) this.toastr.error("Ajouter un prenom");
    if (this.f.userName.errors)
      this.toastr.error("Ajouter un nom d'utilisateur");
    if (this.f.cin.errors) this.toastr.error("Ajouter un cin");
    if (this.f.password.errors) this.toastr.error("Ajouter un mot de passe");
    if (this.f.email.errors) this.toastr.error("Ajouter un email");
    if (this.isEmploye)
      if (this.f.chefHierarchiqueCin.errors)
        this.toastr.error("Ajouter un chef hiérarchique");
    if (this.isAgent)
      if (this.f.chefDAAFCin.errors) this.toastr.error("Ajouter un chef DAAF");

    /*

    console.warn(this.userForm.value);
    this.loginService.signup(this.userForm.value).subscribe(
      (data) => {
        if (data) {
          window.location.reload();
          console.warn(data);
          this.toastr.success("User registered successfully", "", {
            timeOut: 3000,
          });
        }
      },
      (ex) => {
        console.warn(ex);
        this.toastr.warning("Erreur", "", { timeOut: 3000 });
      }
    );*/
  }
  recupereChefHierarchique() {
    this.chefHierarchiqueService.getAllChefHie().subscribe(
      (data) => {
        if (data) {
          //console.warn(data);
          this.elementsChefHie = data;
        } else {
        }
      },
      (ex) => {}
    );
  }
  recupereChefDAAF() {
    this.chefDAAFService.getAllChefDAAF().subscribe(
      (data) => {
        if (data) {
          //console.warn(data);
          this.elementsChefDAAF = data;
        } else {
        }
      },
      (ex) => {}
    );
  }
  onChanged(value: any) {
    console.warn(value);
    if (value.startsWith("employe")) {
      this.isEmploye = true;
      this.isAgent = false;
      this.toastr.warning("qui est le chef hierarchique de cette employe", "", {
        timeOut: 8000,
      });
    } else if (value.startsWith("agent daaf")) {
      this.isAgent = true;
      this.isEmploye = false;
      this.toastr.warning("qui est le chef DAAF de cette agent", "", {
        timeOut: 8000,
      });
    } else {
      this.isEmploye = false;
      this.isAgent = false;
    }
  }
}
