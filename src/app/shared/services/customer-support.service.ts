import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerMessage } from '../models/customer-message';

/**
 * This is mock service
 */
@Injectable({
    providedIn: 'root',
})
export class CustomerSupportService {
    
    constructor() { }

    sendMessage(form: CustomerMessage): Observable<boolean> {
        return form.name ? of(true) : of(false);
    }
}