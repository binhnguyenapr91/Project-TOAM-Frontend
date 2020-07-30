import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountService} from '../service/account.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IAccount} from '../interface/IAccount';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  accountForm: FormGroup;
  message: string;
  accounts: IAccount [] = [];

  constructor(private accountService: AccountService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.getALL();
    this.accountService.shouldRefresh.subscribe(result => this.getALL());
  }

  // tslint:disable-next-line:typedef
  createAccount() {
    const {value} = this.accountForm;
    if (this.accountForm.valid) {
      this.accountService.createAccount(value).subscribe(result => {
        this.message = 'Bạn thêm tài khoản thành công';
        // this.router.navigate(['/accounts']);
      }, error => {
        this.message = 'Bạn thêm tài khoản không thành công';
      });
    } else {
      this.message = 'Bạn thêm tài khoản không thành công';
    }
  }

  getALL(): void {
    this.accountService.getListAccount()
      .subscribe(result => (this.accounts = result), error => (this.accounts = []));
  }

}
