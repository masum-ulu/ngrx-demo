import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import * as fromProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  /**
   * Load products api effects
   */
  loadProducts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromProductActions.loadProducts, fromProductActions.loadAdminProducts),
        mergeMap(() =>//(action) if we have any props in action and we need to get that we will use like this. 
          this.productService.getProducts().pipe(
            map(data => fromProductActions.loadProductsSuccess({ products: data })),
            catchError(error => of(fromProductActions.loadProductsFailure({ error }))))
        ),
      )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }

}
