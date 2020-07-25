import {RouterModule, Routes} from '@angular/router';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {NgModule} from '@angular/core';
import {IndexComponent} from "./component/index/index.component";
import {PropertiesComponent} from "./component/properties/properties.component";
import {PropertyDetailComponent} from "./component/property-detail/property-detail.component";




const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'property',
        component: PropertiesComponent,
      },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
