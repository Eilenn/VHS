import { Component, OnInit } from "@angular/core";
import { Customer } from "./customer";
import { CUSTOMERS } from "./mock/mock-customers";

@Component({
  selector: 'subscribed-customers',
  templateUrl: './templates/subscribed-customers.component.html'
})
export class SubscribedCustomersComponent implements OnInit {
    ngOnInit(): void {
      this.customers=CUSTOMERS;
    }

customers: Customer[];
}