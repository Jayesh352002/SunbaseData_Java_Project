import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnavbarComponent } from './loginnavbar/loginnavbar.component';
import { LoginComponent } from './login/login.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component : LoginnavbarComponent
  },
  {
    path:'addcustomer',
    component:CreatecustomerComponent
  },
  {
    path:'updatecustomer/:uuid',
    component:UpdatecustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
