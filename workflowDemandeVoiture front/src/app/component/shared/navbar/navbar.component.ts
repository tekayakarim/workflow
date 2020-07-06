import { Component, OnInit } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {

  username: String;
  jwtHelper = new JwtHelperService();
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private toastrService: ToastrService
  ) {  }

 roles ="";

  ngOnInit(): void {
    if (this.tokenStorage.getToken() != null) {

      let user = this.jwtHelper.decodeToken(this.tokenStorage.getToken());
      this.roles = user.roles[0].authority;
      this.username = user.sub;
    }
  }
  leave() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl("");
  //  console.warn(this.tokenStorageService.getUser());
  }
  showRole() {
    this.toastrService.success(
    this.roles);
  }
}
