import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../service/account.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  isShow = false;
  message: string;
  accountId: number;
  accountForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    createdDate: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(private accountService: AccountService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.accountId = params.id;
      this.accountService.getAccountById(this.accountId).subscribe(result => {
        this.accountForm.setValue(result);
      });
    });
  }

  onSubmit(): void {
    if (this.accountId) {
      this.accountService.updateAccount(this.accountForm.value).subscribe(result => {
        this.isShow = true;
        this.message = 'Update Successful!';
        alert(this.message);
      });
    } else {
      this.accountService.createAccount(this.accountForm.value).subscribe(result => {
        this.isShow = true;
        this.message = 'Create Successful';
      });
    }
  }

  backToList(){
    this.router.navigate(['/accounts'])
  }

}
