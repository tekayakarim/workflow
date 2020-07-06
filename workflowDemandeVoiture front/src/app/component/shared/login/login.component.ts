import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { LoginService } from "src/app/service/login.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { EmailService } from "src/app/service/email.service";
import { Email } from "src/app/model/email";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  authError = false;
  isLoggedIn = false;
  errorMessage = "";
  roles = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    public tokenStorage: TokenStorageService,
    private spinner: NgxSpinnerService,
    public toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.tokenStorage.signOut();
  }

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }

  submitFunction() {
    if (this.f.username.errors)
      this.toastr.error("entrer votre nom d'utilisateur");
    if (this.f.password.errors)
      this.toastr.error("entrer votre nom mot de passe");
    else {
      this.submitted = true;
      let loginData = this.loginService.login(this.loginForm.value);
      if (loginData) {
        loginData.subscribe(
          (data) => {
            this.tokenStorage.saveToken(data.accessToken);
            //    this.tokenStorage.saveUser(data);
            this.authError = false;
            this.isLoggedIn = true;

            let jwtHelper = new JwtHelperService();

            this.roles = jwtHelper.decodeToken(
              this.tokenStorage.getToken()
            ).roles[0].authority;

            //      this.roles = this.tokenStorage.getUser().roles;
            console.warn(this.roles);
            if (this.roles == "ROLE_EMPLOYE") {
              this.router.navigateByUrl("mes-demandes-voiture");
            }
            if (this.roles == "ROLE_CHEFHIERARCHIQUE") {
              this.router.navigateByUrl("demandes-voiture-chef-hierarchique");
            }
            if (this.roles == "ROLE_CHEFDAAF") {
              this.router.navigateByUrl("demande-document-daaf");
            }
            if (this.roles == "ROLE_ADMIN") {
              this.router.navigateByUrl("all-users");
            }
            if (this.roles == "ROLE_AGENTDAAF") {
              this.router.navigateByUrl("detail-demande-agent-daaf");
            }
            if (this.roles == "ROLE_CHEFPARK") {
              this.router.navigateByUrl("demande-voiture-chef-parc");
            }

            //  console.warn(this.tokenStorage.getUser());
          },
          (err) => {
            this.errorMessage = err.error.message;
            this.authError = true;
            console.warn(err);
            this.toastr.error("utilisateur invalide");
          }
        );
      }
    }
  }

  onSubmit() {
    /*  let email = new Email(
      "hedibensafegine7@gmail.com",
      "azer",
      "<h2>azer</h2>"
    );

    this.emailService.sendEmail(email).subscribe((data) => {
      console.log(data);
    });
*/
    this.spinner.show();
    setTimeout(() => {
      this.submitFunction();
    }, 1000);
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
