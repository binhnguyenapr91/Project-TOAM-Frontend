import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './component/index/index.component';
import {PropertiesComponent} from './component/properties/properties.component';
import {PropertyDetailComponent} from './component/property-detail/property-detail.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';
import {AccountsComponent} from './component/accounts/accounts.component';
import {HostsComponent} from './component/hosts/hosts.component';
import {LoginComponent} from './component/login/login.component';
<<<<<<< HEAD
import {RegisterComponent} from './component/register/register.component';
import {NgModule} from '@angular/core';
import {DetailsComponent} from './component/details/details.component';
import {AccountUpdateComponent} from './component/account-update/account-update.component';
=======

>>>>>>> 99f10df2efb6d3501998ab8e73240091ca33f0d7

import {IndexComponent} from './component/index/index.component';
import {PropertiesComponent} from './properties/properties.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {AddressComponent} from "./address/address.component";
import {AddressListComponent} from "./address-list/address-list.component";
import {AddressUpdateComponent} from "./address-update/address-update.component";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
<<<<<<< HEAD
  },
  {
    path: 'property/:id',
    component: PropertyDetailComponent
=======
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'detail',
        component: PropertyDetailComponent,
      }
    ],
>>>>>>> 99f10df2efb6d3501998ab8e73240091ca33f0d7
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
  },
  {
    path: 'admin/accounts',
    component: AccountsComponent
  },
  {
    path: 'admin/accounts/account-update/:id',
    component: AccountUpdateComponent
  },
  {
    path: 'admin/accounts/host',
    component: HostsComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'property',
    component: PropertiesComponent,
  },
  {
    path: 'create-property',
    component: CreatePropertyComponent
  },
  {
    path: 'create-address',
    component: AddressComponent
  },
  {
    path: 'address',
    component: AddressListComponent
  },
  {
    path: 'address-edit/:id',
    component: AddressUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
