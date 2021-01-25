import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '../models/auth';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    user: User = JSON.parse(localStorage.getItem('user'));

    constructor(private router: Router) { }

    canActivate(): boolean {
        if (!this.user.isadmin) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }
}
