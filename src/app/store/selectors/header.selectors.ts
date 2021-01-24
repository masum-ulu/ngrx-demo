import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthSelectors from '../selectors/auth.selectors';

export interface HeaderViewModel {
    isAdmin: boolean;
    isLoggedIn: boolean;
}


export const selectHeaderViewModel = createSelector(
    fromAuthSelectors.selectIsAdmin,
    fromAuthSelectors.selectIsLoggedIn,
    (isAdmin: boolean, isLoggedIn: boolean): HeaderViewModel => {
        return {
            isAdmin: isAdmin,
            isLoggedIn: isLoggedIn
        };
    }
);