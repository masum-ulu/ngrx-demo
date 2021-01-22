import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';

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

  constructor(
    private actions$: Actions,
    private toastr: ToastrService
  ) { }

}
