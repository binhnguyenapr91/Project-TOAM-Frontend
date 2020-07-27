//chan user khac dang nhap vao route -> su dung o app.rounting.ts bao ve homepage route

import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from "../service/authentication.service";
import {IAccount} from "../interface/IAccount";




@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  currentUser: IAccount;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    // private token: TokenStorageService,
  ) {
    this.authenticationService.currentUser.subscribe(next=>{
      this.currentUser = next;
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let hasRoleAdmin = false;
    console.log(this.currentUser);
    if (this.currentUser) {
      const roleList = this.currentUser.role;
      console.log(roleList);
      for (const role of roleList) {
        if (role.name === 'ROLE_ADMIN') {

          hasRoleAdmin = true;
          break;
        }
      }
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
