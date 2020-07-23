import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAccount} from '../../interface/IAccount';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {Store} from "@ngrx/store";
import {AuthenticationService} from "../../service/authentication.service";


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
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    // update form state
    this.loginForm.patchValue({
      username: '123456@abc',
      password: '123456@abc'
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get Field(): FormGroup {
    return this.loginForm;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService.login(this.Field.controls.username.value, this.Field.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['detail']);
          // this.router.navigate(["detail"]);
        },
        error => {
          this.loading = false;
          console.log(error);
        });

  }

}
