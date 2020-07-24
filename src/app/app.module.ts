import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {LoginComponent} from './component/login/login.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PropertiesComponent} from './properties/properties.component';
import {RegisterComponent} from './register/register.component';
import {LayoutHeaderComponent} from './component/layout-header/layout-header.component';
import {LayoutFooterComponent} from './component/layout-footer/layout-footer.component';
import { LayoutAdminHeaderComponent } from './component/layout-admin-header/layout-admin-header.component';
import { LayoutAdminComponent } from './component/layout-admin/layout-admin.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {RoleComponent} from './role/role.component';
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {IndexComponent} from "./component/index/index.component";
import { TestHomeComponent } from './component/login/test-home/test-home.component';



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
    RoleComponent,
    TestHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
