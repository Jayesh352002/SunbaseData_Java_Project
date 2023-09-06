import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginnavbar',
  templateUrl: './loginnavbar.component.html',
  styleUrls: ['./loginnavbar.component.css']
})
export class LoginnavbarComponent {

  route: string | undefined;

  constructor(private router: Router){
    this.route = router.url;
  }

  openForm(){
    this.router.navigate(['/addcustomer']);
  }
}
