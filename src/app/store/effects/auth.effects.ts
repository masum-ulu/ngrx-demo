import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => AuthActions.loginSuccess({ user: user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

}
