import { Component, OnInit } from '@angular/core';
import {IContract} from '../interface/IContract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-board-host',
  templateUrl: './board-host.component.html',
  styleUrls: ['./board-host.component.css']
})
export class BoardHostComponent implements OnInit {
  contracts: IContract[] = [];
  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.contractService.shouldRefresh.subscribe(result => {
      this.getAll();
    });
  }

  private getAll(): any {
    this.contractService.getAllContractByHostId(14).subscribe(result => {
      this.contracts = result;
      console.log(result);
    });
  }
}
