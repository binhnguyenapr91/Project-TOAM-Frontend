import { Component } from '@angular/core';
import {AuthenticationService} from "./service/authentication.service";
import {Router} from "@angular/router";
import {IAccount} from "./interface/IAccount";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project-TOAM-Frontend';
  currentUser: IAccount;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    // this.router.navigate(['/login']);
    this.router.navigate(['/']);
  }
}
