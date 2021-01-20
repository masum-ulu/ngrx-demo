import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CustomerSupportService } from 'src/app/shared/services/customer-support.service';
import * as fromSupportActions from '../actions/customer-support.actions';

@Injectable()
export class CustomerSupportEffects {
  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSupportActions.sendingCustomerSupportMessage),
      mergeMap((action) =>
        this.customerSupportService.sendMessage(action.data).pipe(
          map(bool => fromSupportActions.sendMessageStatus({ isSentSuccess: bool }))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private customerSupportService: CustomerSupportService
  ) { }

}
