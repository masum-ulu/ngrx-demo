import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';

const components = [
  HomeComponent,
  NotFoundComponent,
  CustomerSupportComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    RouterModule,
  ],
  exports: [components]
})
export class PagesModule { }
