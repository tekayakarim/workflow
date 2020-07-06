import { Injectable } from "@angular/core";
import { AuthGuardService } from "./auth-guard.service";
import { TokenStorageService } from "./token-storage.service";
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class RoleGuardService {
  constructor(
    public auth: AuthGuardService,
    public storage: TokenStorageService,
    public router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot) {

     let jwtHelper = new JwtHelperService();

         const expectedRole = jwtHelper.decodeToken(this.storage.getToken()).roles[0].authority;
    if (
      !this.auth.canActivate()
    )
    {
    //  console.warn(this.storage.getUser().roles);
      this.storage.signOut();
      this.router.navigateByUrl("");
      return false;
    }
    return true;
  }
}
