import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';

import * as fromAuthActions from '../actions/auth.actions';
import * as fromProductActions from '../../modules/product/state/product.actions';

@Injectable()
export class AlertEffects {
  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginPage),
        tap(() => this.toastr.info('Checking your information'))
      ),
    { dispatch: false }
  );
  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) => this.toastr.success(`Welcome back ${action.user.username} !`))
      ),
    { dispatch: false }
  );
  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginFailure),
        tap(() => this.toastr.error('Unable to login'))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logOut),
        tap(() => this.toastr.warning('You are logged out'))
      ),
    { dispatch: false }
  );
  comeBackSoon$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logOut),
        tap(() =>
          setTimeout(() => {
            this.toastr.info('Come back soon!');
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  unableToLoadProducts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromProductActions.loadProductsFailure),
        tap(() =>
          setTimeout(() => {
            this.toastr.error('Unable to load products');
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  productCreated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromProductActions.addProductSuccess),
        tap(() => this.toastr.success('Product Created'))
      ),
    { dispatch: false }
  );

  unableToCreateProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromProductActions.addProductFailure),
        tap(() =>
          setTimeout(() => {
            this.toastr.error('Unable to create product');
          }, 2000)
        )
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private toastr: ToastrService
  ) { }
}
