import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../service/account.service';
import {IAccount} from '../../interface/IAccount';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
  accounts: IAccount[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.accountService.shouldRefresh.subscribe(result => (this.getAll()));
  }

  getAll(): void {
    this.accountService
      .getListAccount()
      .subscribe(result => (this.accounts = result), error => (this.accounts = []));
  }

}
