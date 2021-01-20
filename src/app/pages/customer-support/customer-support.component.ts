import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerSupportService } from 'src/app/shared/services/customer-support.service';
import { AppState } from 'src/app/store';
import { sendingCustomerSupportMessage } from 'src/app/store/actions/customer-support.actions';
import { selectName } from 'src/app/store/selectors/customer-support.selectors';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
  isSendSuccess: boolean | null = null;
  name$: Observable<string>;

  constructor(
    private customerSupportService: CustomerSupportService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { 
    this.name$ = this.store.pipe(select(selectName));
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(sendingCustomerSupportMessage({ data: f.value }));
    this.isSendSuccess = true;
  }

  clearFeedback() {
    this.isSendSuccess = null;
  }

}
