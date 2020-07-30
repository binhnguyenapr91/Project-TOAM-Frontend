import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {IAccount} from '../../interface/IAccount';
import {AuthenticationService} from '../../service/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentUser: IAccount;
  users = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: LoginService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): any {
    this.loadAllUsers();
  }

  deleteUser(id: number): any {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers(): any {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}
