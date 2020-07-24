

import {RegisterComponent} from './register/register.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {PropertiesComponent} from "./properties/properties.component";
import {DetailsComponent} from "./component/details/details.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {IndexComponent} from "./component/index/index.component";



const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent
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
    component: PropertiesComponent
  },
  { path:'detail',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
