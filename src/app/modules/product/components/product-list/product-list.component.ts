import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

import * as fromProductActions from '../../state/product.actions';
import * as fromProductSelectors from '../../state/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  vm$: Observable<fromProductSelectors.ProductViewModel>;

  constructor(private store: Store<AppState>) { }

  private loadProducts(): void {
    this.store.dispatch(fromProductActions.loadAdminProducts());
  }

  ngOnInit(): void {
    this.loadProducts();
    this.vm$ = this.store.pipe(select(fromProductSelectors.selectProductsViewModel));
  }

  deleteOnClick(id: number): void {
    this.store.dispatch(fromProductActions.deleteProduct({ id: id }));
  }

}
