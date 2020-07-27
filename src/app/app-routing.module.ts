import {RegisterComponent} from './register/register.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';


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
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'detail',
        component: PropertyDetailComponent,
      }
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'admin/account',
        component: PropertyDetailComponent,
      },
    ],
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
