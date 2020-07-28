import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {AuthService} from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showHostBoard = false;
  showRenterBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,
              private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getNavigate();
    this.authService.shouldRefresh.subscribe(req => {
      this.getNavigate();
    });
  }
  getNavigate(): any{
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showHostBoard = this.roles.includes('ROLE_HOST');
      this.showRenterBoard = this.roles.includes('ROLE_RENTER');
      this.username = user.username;
    }
  }

  logout(): void {
    this.signout();
    this.authService.shouldRefresh.subscribe(req => {
      this.signout();
    });
  }
  signout(): any{
    this.tokenStorageService.signOut();
  }
}
