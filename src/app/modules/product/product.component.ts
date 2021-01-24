import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

import * as fromProductActions from './state/product.actions';
import * as fromProductSelectors from './state/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string = "Products";
  vm$: Observable<fromProductSelectors.ProductViewModel>;

  constructor(private store: Store<AppState>) { }

  private loadProducts(): void {
    this.store.dispatch(fromProductActions.loadProducts());
  }

  ngOnInit(): void {
    this.loadProducts();
    this.vm$ = this.store.pipe(select(fromProductSelectors.selectProductsViewModel));
  }

}
