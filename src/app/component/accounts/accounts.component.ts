import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../service/account.service';
import {IAccount} from '../../interface/IAccount';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: IAccount[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getALL();
    this.accountService.shouldRefresh.subscribe(result => this.getALL());
  }

  getALL(): void {
    this.accountService.getListAccount()
      .subscribe(result => (this.accounts = result), error => (this.accounts = []));
  }
}
