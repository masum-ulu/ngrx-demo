import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../modules/auth/models/auth';
import { AppState } from '../store';
import * as fromAuthActions from '../store/actions/auth.actions';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(fromAuthActions.browserReload({ user }));
      //if your prop name is same with your variable name you don't need to make like {user:user}
      //if it's not same you need make this {user:user}!!
    }
  }

}
