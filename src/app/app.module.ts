import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginnavbarComponent } from './loginnavbar/loginnavbar.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { GetcustomerComponent } from './getcustomer/getcustomer.component';
import { MatIconModule } from '@angular/material/icon';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LoginnavbarComponent,
    CreatecustomerComponent,
    GetcustomerComponent,
    UpdatecustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
