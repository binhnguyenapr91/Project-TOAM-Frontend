import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../service/account.service';
import {IAccount} from '../../../interface/IAccount';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-renter-detail',
  templateUrl: './renter-detail.component.html',
  styleUrls: ['./renter-detail.component.css']
})
export class RenterDetailComponent implements OnInit {
  renterDetail: IAccount;

  constructor(private accountService: AccountService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.accountService.getDetail(id).subscribe(result => {
      this.renterDetail = result;
      console.log(result);
    });
  }
}
