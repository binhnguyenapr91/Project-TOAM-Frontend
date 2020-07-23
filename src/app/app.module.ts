import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';




import { LoginComponent } from './component/login/login.component';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// @ts-ignore
import {PropertiesComponent} from './properties/properties.component';
// @ts-ignore
import {RegisterComponent} from './register/register.component';

import {IndexComponent} from './component/index/index.component';
import {LayoutHeaderComponent} from './component/layout-header/layout-header.component';
import {LayoutFooterComponent} from './component/layout-footer/layout-footer.component';
import { LayoutAdminHeaderComponent } from './component/layout-admin-header/layout-admin-header.component';
import { LayoutAdminComponent } from './component/layout-admin/layout-admin.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {IndexComponent} from './index/index.component';
import { RoleComponent } from './role/role.component';




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
    PropertyDetailComponent
    RoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
