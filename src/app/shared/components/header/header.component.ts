import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as fromHeaderSelectors from 'src/app/store/selectors/header.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  vm$: Observable<fromHeaderSelectors.HeaderViewModel>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(fromHeaderSelectors.selectHeaderViewModel));
  }

}
