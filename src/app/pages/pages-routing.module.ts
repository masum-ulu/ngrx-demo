import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'support', component: CustomerSupportComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }