import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private toaster: ToastrService) { }

  ngOnInit() {

  }

  Submit() {
    this.toaster.success("Payment Successull");
    alert("Order Placed Sucessfully");
  }
}
