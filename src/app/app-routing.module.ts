// import {RegisterComponent} from './register/register.component';
// import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';
//
// import {NgModule} from '@angular/core';
// import {Routes, RouterModule} from '@angular/router';
//
//
//
// import {IndexComponent} from './component/index/index.component';
// import {PropertiesComponent} from './properties/properties.component';
// import {PropertyDetailComponent} from './property-detail/property-detail.component';
// import {CreatePropertyComponent} from './create-property/create-property.component';
// import {AddressComponent} from './address/address.component';
// import {AddressListComponent} from './address-list/address-list.component';
// import {AddressUpdateComponent} from './address-update/address-update.component';
// import {LoginComponent} from './login/login.component';
// import {HomeComponent} from './home/home.component';
// import {ProfileComponent} from './profile/profile.component';
// import {BoardRenterComponent} from './board-renter/board-renter.component';
// import {BoardHostComponent} from './board-host/board-host.component';
// import {BoardAdminComponent} from './board-admin/board-admin.component';
//
//
// const routes: Routes = [
//   {
//     path: '',
//     component: IndexComponent,
//     children: [
//       {
//         path: 'detail',
//         component: PropertyDetailComponent,
//       }
//     ],
//   },
//   {
//     path: 'admin',
//     component: LayoutAdminComponent,
//     children: [
//       {
//         path: 'admin/account',
//         component: PropertyDetailComponent,
//       },
//     ],
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'register',
//     component: RegisterComponent
//   },
//   {
//     path: 'property',
//     component: PropertiesComponent,
//   },
//   {
//     path: 'create-property',
//     component: CreatePropertyComponent
//   },
//   {
//     path: 'create-address',
//     component: AddressComponent
//   },
//   {
//     path: 'address',
//     component: AddressListComponent
//   },
//   {
//     path: 'address-edit/:id',
//     component: AddressUpdateComponent
//   },
//   { path: 'home', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'renter', component: BoardRenterComponent },
//   { path: 'host', component: BoardHostComponent },
//   { path: 'admin', component: BoardAdminComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' }
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
