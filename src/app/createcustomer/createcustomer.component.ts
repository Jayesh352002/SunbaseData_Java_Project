import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css'],
})
export class CreatecustomerComponent {
  firstName: any;
  lastName: any;
  state: any;
  street: any;
  city: any;
  phone: any;
  email: any;
  address: any;

  cmd: string = 'create';

  auth_token: string = 'dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=';

  url = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create';

  constructor(private http: HttpClient) {}

  addCustomers() {
    if(this.firstName==="" || this.lastName===""){
      alert("First Name & Last Name is Required")
    }
    else
    {
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth_token}`
      })
      let bodyDate = {
        "first_name": this.firstName,
        "last_name": this.lastName,
        "street": this.street,
        "address": this.address,
        "city": this.city,
        "state": this.state,
        "email": this.email,
        "phone": this.phone,
      };
      this.http
        .post(this.url, bodyDate, {
          headers: header,
          responseType: 'text',
        })
        .subscribe((resultData: any) => {
          console.log('Result : ' + resultData);
        });
    }

  }
}


