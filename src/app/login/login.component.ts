import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Root } from '../model/token.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string="";
  password:string="";

  token!:Root;

  t : string = "";

  route: string | undefined;

  url = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";

  constructor(private http: HttpClient , private router: Router){
    this.route = router.url;
  }

  login(){
    let bodyDate={
      "login_id":this.email,
      "password":this.password
    }
    this.http.post(this.url,bodyDate,{responseType:'text'}).subscribe((resultData:any)=>{
      //console.log("Bearer Token :- "+resultData);
      this.token = resultData ;
      this.t = JSON.stringify(resultData);
      //this.token.access_token = this.t;
      console.log(this.token.access_token);
      this.router.navigate(['/dashboard']);

    })
  }
}
