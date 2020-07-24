import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const ID_KEY = 'AuthUserId';
const NAME_KEY = 'Name';
const EMAIL_KEY = 'Email';
const PHONE_KEY = 'Phone';
const STATUS_KEY = 'Status';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private roles: Array<string> = [];

  constructor() {
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getPhone(): string {
    return sessionStorage.getItem(PHONE_KEY);
  }

  // tslint:disable-next-line:typedef
  public savePhone(phone: string) {
    window.sessionStorage.removeItem(PHONE_KEY);
    window.sessionStorage.setItem(PHONE_KEY, phone);
  }

  // tslint:disable-next-line:typedef
  public getStatus(status: boolean) {
    return sessionStorage.getItem(STATUS_KEY);
  }

  // tslint:disable-next-line:typedef
  public saveStatus(status: boolean) {
    window.sessionStorage.removeItem(STATUS_KEY);
    window.sessionStorage.setItem(STATUS_KEY, String(status));
  }

  // tslint:disable-next-line:typedef
  public saveEmail(email: string) {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  }

  public getEmail(): string {
    return sessionStorage.getItem(EMAIL_KEY);
  }

  public getName(): string {
    return sessionStorage.getItem(NAME_KEY);
  }

  // tslint:disable-next-line:typedef
  public saveName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  // tslint:disable-next-line:typedef
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  // tslint:disable-next-line:typedef
  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getUserId(): string {
    return sessionStorage.getItem(ID_KEY);
  }

  // tslint:disable-next-line:typedef
  public saveUserId(userId: string) {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, userId);
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      try {
        JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
          this.roles.push(authority.authority);
        });
      } catch (e) {
        console.log(e);
      }
    }
    return this.roles;
  }
}
