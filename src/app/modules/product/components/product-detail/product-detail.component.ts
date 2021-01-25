import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { Product } from '../../models/product';
import * as fromProductSelectors from '../../state/product.selectors';
import * as fromProductAction from '../../state/product.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isProductInStore$: Observable<boolean>;
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') ?? 0;

    this.isProductInStore$ = this.store.pipe(select(fromProductSelectors.entityExists, { id: id }));

    this.product$ = this.isProductInStore$.pipe(
      mergeMap((isProductInStore) => {
        if (!isProductInStore) {
          this.store.dispatch(fromProductAction.loadProduct({ id: id }));
        }

        return this.store.pipe(
          select(fromProductSelectors.selecetEntityById, { id: id })
        );
      })
    );
  }

}
