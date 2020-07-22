import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {AlertService} from '../../service/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    // update form state
    this.loginForm.patchValue({
      username: 'foofoo',
      password: 'foofoo'
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get Field(): FormGroup {
    return this.loginForm;
  }

  onSubmit(): void {
    this.submitted = true;
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.loginService.login(this.Field.controls.username.value, this.Field.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]).then(r => console.log(r));
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

}
