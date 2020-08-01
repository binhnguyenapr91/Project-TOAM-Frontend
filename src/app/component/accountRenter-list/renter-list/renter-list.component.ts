import {Component, OnInit} from '@angular/core';
import {IAccount} from '../../../interface/IAccount';
import {AccountService} from '../../../service/account.service';

@Component({
  selector: 'app-renter-list',
  templateUrl: './renter-list.component.html',
  styleUrls: ['./renter-list.component.css']
})
export class RenterListComponent implements OnInit {
  renters: IAccount [] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getListRenter().subscribe(result => {
      this.renters = result;
      console.log(result);
    });
  }

}
