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

  /**
   * Load product api effect
   */
  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProduct),
      mergeMap((action) =>
        this.productService.getProduct(action.id).pipe(
          map(product => fromProductActions.loadProductSuccess({ product })),//if props name and map param name is the same. Then we don't need use like product:product
          catchError(error => of(fromProductActions.loadProductFailure({ error }))))
      )
    )
  );

  /**
   * Create product api effect
   */
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.addProduct),
      mergeMap((action) =>
        this.productService.addProduct(action.product).pipe(
          map(product => fromProductActions.addProductSuccess({ product })),
          catchError(error => of(fromProductActions.addProductFailure({ error }))))
      )
    )
  );

  /**
   * Update product api effect
   */
  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.upsertProduct),
      mergeMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map((product) => fromProductActions.upsertProductSuccess({ product })),
          catchError((error) =>
            of(fromProductActions.upsertProductFailure({ error }))
          )
        )
      )
    )
  );

  /**
   * Delete product api effect 
   */
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.deleteProduct),
      mergeMap((action) =>
        this.productService.deleteProduct(action.id).pipe(
          map(() => fromProductActions.deleteProductSuccess()),
          catchError((error) =>
            of(fromProductActions.deleteProductFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }

}
