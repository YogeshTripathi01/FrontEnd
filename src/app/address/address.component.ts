import { Component, OnInit } from '@angular/core';
import { AddressService } from './address.service';

import { Router} from '@angular/router' ;
import { Address } from '../shared/AddressModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private service:AddressService,private router:Router,private toastr:ToastrService) { }
  
  Address:any;

  a=new Address();
  userId:any;
  ngOnInit() {

   this.service.GetAddress()
  
   .subscribe(
     (res:any)=>{
       console.log(res),
      this.Address=res;
     },
     err=>{
       console.log(err);
     }
   );
  } 
  
  onSubmit()
  { 
  this.userId= localStorage.getItem('id');
    this.service.AddressAdd().subscribe(
      (res:any)=>{
        console.log(res.saved);
        this.toastr.success("address added succcessfully");
        this.router.navigate(['/payment']);
      }
     
    );
  } 

}
