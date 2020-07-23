import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './component/login/login.component';
import {DetailsComponent} from "./component/details/details.component";
import {AuthGuard} from "./_helpers/auth.guard";



const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path:'detail',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
