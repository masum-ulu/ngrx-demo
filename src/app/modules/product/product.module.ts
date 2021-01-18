import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
  ],
  exports: [ProductComponent, ProductListComponent, ProductCardComponent]
})
export class ProductModule { }
