import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {IAccount} from "../interface/IAccount";
import {AccountService} from "../service/account.service";

@Component({
  selector: 'app-board-host',
  templateUrl: './board-host.component.html',
  styleUrls: ['./board-host.component.css']
})
export class BoardHostComponent implements OnInit {
  accounts: IAccount[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getALLbyHost();
    this.accountService.shouldRefresh.subscribe(result => this.getALLbyHost());
  }

  getALLbyHost(): void {
    this.accountService.getListHost()
      .subscribe(result => (this.accounts = result), error => (this.accounts = []));
  }

  /*deleteHost(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.accountService.deleteAccount(id).subscribe(result => {
        this.accountService.shouldRefresh.next();
      });
    }
  }*/
}
