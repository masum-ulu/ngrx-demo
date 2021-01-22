import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.css']
})
export class AuthLinksComponent implements OnInit {
  vm$: Observable<fromAuthSelectors.AuthLinksViewModel>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(fromAuthSelectors.selectAuthLinksViewModel));
  }

  logOut(): void {
    
  }
}
