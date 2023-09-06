import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Root } from '../model/customerDetails.moel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit{

  firstName: any;
  lastName: any;
  state: any;
  street: any;
  city: any;
  phone: any;
  email: any;
  address: any;

  id : any ;

  route: string | undefined;

  url = '';

  auth_token: string = 'dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=';

  constructor(private router: Router , private http: HttpClient , private activatedRoute: ActivatedRoute ){
    this.route = router.url;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['uuid'];
      console.log("Status :- "+this.id);
    });
  }

  updateCustomers(){
    this.updateCustomersDetails().subscribe({
      next:(result)=>{
        console.log("Update Record :"+result);
      }
    });
  }

  updateCustomersDetails():Observable<Root>{

    this.url =`https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=${this.id}` ;

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    let bodyData={
      "first_name": this.firstName,
      "last_name": this.lastName,
      "street": this.street,
      "address": this.address,
      "city": this.city,
      "state": this.state,
      "email": this.email,
      "phone": this.phone
    };
    return this.http
    .post<Root>(this.url , bodyData , {
      headers: header
    })
  }
}


