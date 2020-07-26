import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './component/index/index.component';
import {PropertiesComponent} from './component/properties/properties.component';
import {PropertyDetailComponent} from './component/property-detail/property-detail.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';
import {AccountsComponent} from './component/accounts/accounts.component';
import {HostsComponent} from './component/hosts/hosts.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {NgModule} from '@angular/core';
import {DetailsComponent} from './component/details/details.component';
import {AccountUpdateComponent} from './component/account-update/account-update.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'property/:id',
    component: PropertyDetailComponent
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
