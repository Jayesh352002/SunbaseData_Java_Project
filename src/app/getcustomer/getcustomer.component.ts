import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Root } from '../model/customerDetails.moel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getcustomer',
  templateUrl: './getcustomer.component.html',
  styleUrls: ['./getcustomer.component.css']
})
export class GetcustomerComponent implements OnInit {

  customerDetail:Root[] = [] ;

  public custData :any = [] ;

  route: string | undefined;

  auth_token: string = 'dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=';

  url = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list';

  removeUrl = '';

  updateUrl = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=test9ed96a8b5308467fb32da3a397846aff';

  constructor(private http: HttpClient , private router: Router) {
    this.route = router.url ;
  }

  ngOnInit(): void {
    this.getCustomersList().subscribe((result)=>{
      this.custData = result ;
    });
  }

  getCustomersList():Observable<Root>{
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http
    .get<Root>(this.url ,{
      headers: header
    });

  }

  openForm(){
    this.router.navigate(['/addcustomer']);
  }

  remove(uid:any){
    this.removeRecord(uid).subscribe(({
      next:(result)=>{
        console.log("Delete Record Result : "+result);
      }
    }))
  }

  removeRecord(uuid:any):Observable<string>{

    alert("Record Deleted Successfully");
    console.log(uuid);

    this.removeUrl = `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${uuid}`;

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    let bodyData={

    };
    return this.http
    .post<string>(this.removeUrl , bodyData , {
      headers: header
    })
  }

  update(uuid:any){
    this.router.navigate(['/updatecustomer',uuid]);
  }

}

