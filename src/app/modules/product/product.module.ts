import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromProduct from './state/product.reducer';

import { ProductEffects } from './state/product.effects';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const components = [
  ProductComponent,
  ProductListComponent,
  ProductCardComponent,
  ProductDetailComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  exports: [components]
})
export class ProductModule { }
