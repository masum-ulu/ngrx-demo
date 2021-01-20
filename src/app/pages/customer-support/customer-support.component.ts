import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerSupportService } from 'src/app/shared/services/customer-support.service';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
  isSendSuccess: boolean | null = null;

  constructor(private customerSupportService: CustomerSupportService) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.customerSupportService.sendMessage(f.value).subscribe((success) => {
      console.log(success);
      this.isSendSuccess = success;
    });
  }

  clearFeedback() {
    this.isSendSuccess = null;
  }

}
