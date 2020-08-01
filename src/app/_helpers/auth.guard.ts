//chan user khac dang nhap vao route -> su dung o app.rounting.ts bao ve homepage route

import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TokenStorageService} from "../_services/token-storage.service";
import {IAccount} from "../interface/IAccount";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  rolesAdmin: string;

  constructor(
    private router: Router,
    private token: TokenStorageService,
  ) {
    this.rolesAdmin = this.token.getUser().roles;

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.rolesAdmin[0] === "ROLE_ADMIN") {
      return true;
    } else {
      this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
