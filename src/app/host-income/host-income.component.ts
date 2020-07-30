import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HostIncomeService} from '../service/host-income.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {IAddress} from '../interface/IAddress';
import {IHostIncome} from '../interface/IHostIncome';

@Component({
  selector: 'app-host-income',
  templateUrl: './host-income.component.html',
  styleUrls: ['./host-income.component.css']
})
export class HostIncomeComponent implements OnInit {
  incomePerMonth: IHostIncome[] = [];
  currentUser: any;

  constructor(private incomeService: HostIncomeService,
              private activeRoute: ActivatedRoute,
              private token: TokenStorageService) {
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getAll();
    this.incomeService.shouldRefresh.subscribe(result => {
      this.getAll();
    });
  }

  private getAll(): void {
    this.incomeService.getHostIncomeList().subscribe(result => {
      this.incomePerMonth = result;
    });
  }
}
