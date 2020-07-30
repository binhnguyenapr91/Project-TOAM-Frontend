import {Component, OnInit} from '@angular/core';
import {ValuePerMonthService} from '../../service/value-per-month.service';
import {ValuePerMonth} from '../../interface/ValuePerMonth';

@Component({
  selector: 'app-history-contract',
  templateUrl: './history-contract.component.html',
  styleUrls: ['./history-contract.component.css']
})
export class HistoryContractComponent implements OnInit {
  histories: ValuePerMonth [] = [];

  constructor(private valuePerMonthService: ValuePerMonthService) {
  }

  ngOnInit(): void {
    this.valuePerMonthService.getAllHistory().subscribe(result => {
      this.histories = result;
    });
  }
}
