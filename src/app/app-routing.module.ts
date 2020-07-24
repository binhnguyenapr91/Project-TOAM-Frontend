import {RegisterComponent} from './register/register.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';

import {IndexComponent} from "./component/index/index.component";
import {PropertiesComponent} from "./properties/properties.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {TestHomeComponent} from "./component/login/test-home/test-home.component";



const routes: Routes = [
  {
    path: 'detail',
    component: PropertyDetailComponent,
  },
  {
    path: 'property',
    component: PropertiesComponent,
  },
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AuthGuard],

  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
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
    path: 'testHome',
    component: TestHomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
