

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardRenterComponent } from './board-renter/board-renter.component';
import { BoardHostComponent } from './board-host/board-host.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'renter', component: BoardRenterComponent },
  { path: 'host', component: BoardHostComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardRenterComponent} from './board-renter/board-renter.component';
import {BoardHostComponent} from './board-host/board-host.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {PropertiesComponent} from './properties/properties.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'renter', component: BoardRenterComponent},
  {path: 'host', component: BoardHostComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'create-property', component: CreatePropertyComponent},
  {path: 'property', component: PropertiesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
