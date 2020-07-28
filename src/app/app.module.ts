import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PropertiesComponent} from './properties/properties.component';
import {RegisterComponent} from './register/register.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';
import {RoleComponent} from './role/role.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { CreatePropertyComponent } from './create-property/create-property.component';
import {RegisterInterceptor} from './_helpers/register.interceptor';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
import {AuthInterceptor} from './_helpers/auth.interceptor';
import {LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BoardHostComponent } from './board-host/board-host.component';
import { BoardRenterComponent } from './board-renter/board-renter.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertiesComponent,
    RegisterComponent,
    PropertyDetailComponent,
    RoleComponent,
    CreatePropertyComponent,
    AddressComponent,
    AddressListComponent,
    AddressUpdateComponent,
    ProfileComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardHostComponent,
    BoardRenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RegisterInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
