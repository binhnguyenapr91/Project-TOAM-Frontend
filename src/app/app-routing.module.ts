import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropertyDetailComponent} from './property-detail/property-detail.component';


const routes: Routes = [
  {
    path: 'properties/:id',
    component: PropertyDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
