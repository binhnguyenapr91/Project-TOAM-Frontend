import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAccount} from "../../../interface/IAccount";
import {Subscription} from "rxjs";
import {AuthenticationService} from "../../../service/authentication.service";
import {LoginService} from "../../../service/login.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit, OnDestroy {

  currentUser: IAccount;
  currentUserSubscription: Subscription;
  users: IAccount[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: LoginService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
