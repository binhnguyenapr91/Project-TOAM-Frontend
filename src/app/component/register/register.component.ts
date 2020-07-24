import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "../../service/account.service";
import {IAccount} from "../../interface/IAccount";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  account: IAccount[] = [];
  message: string;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const {value} = this.form;
      this.accountService.Register(value)
        .subscribe(next => {
          this.account.unshift(next);
          this.form.reset({
            name: '',
            username: '',
            password: '',
            email: '',
            phone: '',
            address: ''
          });
        }, error => console.log(error));
    }
  }
}
