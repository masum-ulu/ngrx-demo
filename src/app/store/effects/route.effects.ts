import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';

@Injectable()
export class RouteEffects {

  goShopping$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap(() => this.route.navigate(['product']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private route: Router
  ) { }

}
