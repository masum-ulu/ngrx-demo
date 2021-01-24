import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Product } from './models/product';
import * as fromProductActions from './state/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string = "Products";
  products: Product[] = null;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromProductActions.loadProducts());
  }

}
