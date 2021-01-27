import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

import * as fromAuthActions from '../actions/auth.actions';
import * as fromProductActions from '../../modules/product/state/product.actions';

@Injectable()
export class SpinnerEffects {
  spinnerOn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginPage,
          fromProductActions.loadProducts,
          fromProductActions.loadAdminProducts,
          fromProductActions.loadProduct,
          fromProductActions.addProduct,
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  spinnerOff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginSuccess,
          fromAuthActions.loginFailure,
          fromProductActions.loadProductsSuccess,
          fromProductActions.loadProductsFailure,
          fromProductActions.loadProductSuccess,
          fromProductActions.loadProductFailure,
          fromProductActions.addProductSuccess,
          fromProductActions.addProductFailure,
        ),
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private spinner: NgxSpinnerService
  ) { }
}
