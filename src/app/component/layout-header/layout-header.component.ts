import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
import {IAccount} from "../../interface/IAccount";

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
  currentUser: IAccount;
  err : IAccount;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => {
        this.currentUser = x;
      }, error => {
        console.log(error)
      })
  }

  ngOnInit(): void {
  }

  Logout() {
    this.authenticationService.logout();
    this.router.navigate(['/'])
  }
}
