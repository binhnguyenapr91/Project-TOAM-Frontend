import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RegisterInterceptor} from './_helpers/register.interceptor';
import {AuthInterceptor} from './_helpers/auth.interceptor';
import {LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BoardHostComponent } from './board-host/board-host.component';
import { BoardRenterComponent } from './board-renter/board-renter.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import { FakePropertyDetailComponent } from './component/fake-property-detail/fake-property-detail.component';
import { CommentComponent } from './component/comment/comment.component';
import { LayoutHeaderComponent } from './component/layout-header/layout-header.component';
import { LayoutFooterComponent } from './component/layout-footer/layout-footer.component';
import { PropertyListComponent } from './component/property-list/property-list.component';
import {PropertiesComponent} from './properties/properties.component';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {AddressComponent} from './address/address.component';
import {AddressListComponent} from './address-list/address-list.component';
import {AddressUpdateComponent} from './address-update/address-update.component';
import {RoleComponent} from './role/role.component';
import {PropertyDetailComponent} from './component/property-detail/property-detail.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { RenterListComponent } from './component/accountRenter-list/renter-list/renter-list.component';
import { RenterDetailComponent } from './component/accountRenter-list/renter-detail/renter-detail.component';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountUpdateComponent } from './account-update/account-update.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardHostComponent,
    BoardRenterComponent,
    PropertiesComponent,
    CreatePropertyComponent,
    AddressComponent,
    AddressListComponent,
    AddressUpdateComponent,
    RoleComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    CalendarComponent,
    AccountUpdateComponent,
    PropertyEditComponent,
    RenterListComponent,
    RenterDetailComponent,
    PropertyEditComponent,
    CommentComponent,
    AccountListComponent,
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
