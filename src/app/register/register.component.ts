import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../service/account.service';
import {IRole} from '../interface/IRole';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  message: string;
  role: string;
  roles: IRole [] = [];
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      role: ['']
    });
    this.roleService.getAllRole().subscribe(result => {
      this.roles = result;
      console.log(this.roles);

    }, error => {
      this.roles = [];
      alert("không thể lấy role");
      console.log(error);
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const {value} = this.form;
      this.accountService.Register(value)
        .subscribe(next => {
          this.form.reset({
            name: '',
            username: '',
            password: '',
            email: '',
            phone: '',
          });
          this.message = 'success';
          console.log(next);
        }, error =>
        {console.log(error);
        });
    } else {
      this.message = 'no success';
    }
  }
}
