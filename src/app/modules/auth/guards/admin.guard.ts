import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectIsAdmin } from 'src/app/store/selectors/auth.selectors';
import { User } from '../models/auth';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    isAdmin: boolean;

    constructor(private store: Store<AppState>, private router: Router) { }
    
    canActivate(): boolean {
        this.store.pipe(select(selectIsAdmin))
            .subscribe((bool) => {
                this.isAdmin = bool;
                if (!this.isAdmin) {
                    this.router.navigate(['/home']);
                }
            });
        return this.isAdmin;
    }
}