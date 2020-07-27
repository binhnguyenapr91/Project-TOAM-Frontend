import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {LoginComponent} from './component/login/login.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LayoutHeaderComponent} from './component/layout-header/layout-header.component';
import {LayoutFooterComponent} from './component/layout-footer/layout-footer.component';
import {LayoutAdminHeaderComponent} from './component/layout-admin-header/layout-admin-header.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';
<<<<<<< HEAD
import {AccountsComponent} from './component/accounts/accounts.component';
import {HostsComponent} from './component/hosts/hosts.component';
import {RegisterComponent} from './component/register/register.component';
import {RoleComponent} from './role/role.component';
import {DetailsComponent} from './component/details/details.component';
import {PropertiesComponent} from './component/properties/properties.component';
import {IndexComponent} from './component/index/index.component';
import {PropertyDetailComponent} from './component/property-detail/property-detail.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import { AccountUpdateComponent } from './component/account-update/account-update.component';
=======
import {PropertyDetailComponent} from './property-detail/property-detail.component';
import {RoleComponent} from './role/role.component';
import {DetailsComponent} from './component/details/details.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {IndexComponent} from './component/index/index.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { CreatePropertyComponent } from './create-property/create-property.component';
import {RegisterInterceptor} from './register.interceptor';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
>>>>>>> 99f10df2efb6d3501998ab8e73240091ca33f0d7


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertiesComponent,
    RegisterComponent,
    IndexComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutAdminHeaderComponent,
    LayoutAdminComponent,
    PropertyDetailComponent,
    AccountsComponent,
    HostsComponent,
    RoleComponent,
    DetailsComponent,
<<<<<<< HEAD
    AccountUpdateComponent,
=======
    CreatePropertyComponent,
    AddressComponent,
    AddressListComponent,
    AddressUpdateComponent,
>>>>>>> 99f10df2efb6d3501998ab8e73240091ca33f0d7
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
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RegisterInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
