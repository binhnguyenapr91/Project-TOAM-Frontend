import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PropertiesComponent} from './properties/properties.component';
import {RegisterComponent} from './register/register.component';
import {IndexComponent} from './index/index.component';
import { RoleComponent } from './role/role.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertiesComponent,
    RegisterComponent,
    IndexComponent,
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
