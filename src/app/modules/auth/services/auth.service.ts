import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  //Fake Login API
  login(username: string, password: string): Observable<any> {
    return this.http.get(this.baseUrl + '?username=' + username).pipe(
      switchMap((users) => {
        let user = users[0];
        if (user) {
          return of(user);
        } else {
          return throwError('Unable to login');
        }
      })
    );
  }
}
