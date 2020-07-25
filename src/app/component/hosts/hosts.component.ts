import { Component, OnInit } from '@angular/core';
import {IAccount} from '../../interface/IAccount';
import {AccountService} from '../../service/account.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  accounts: IAccount[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getALLbyHost();
    this.accountService.shouldRefresh.subscribe(result => this.getALLbyHost());
  }

  getALLbyHost(): void {
    this.accountService.getAccountByHost()
      .subscribe(result => (this.accounts = result), error => (this.accounts = []));
  }

}
