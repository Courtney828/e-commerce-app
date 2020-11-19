import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public contactForm: FormGroup;
  email
  password
  loggonInUser


  constructor(public authService:AuthService,private router: Router,private _formBuilder: FormBuilder) { 
  this.contactForm = this._formBuilder.group({
    email: "",
    password: ""
  });
 }
  ngOnInit() {
    this.authService.getCurrentUser()
  }
  login(){

    this.authService.signInUser(this.contactForm.value.email, this.contactForm.value.password)
    this.router.navigate(['/product']);
    this.loggonInUser = this.authService.userInfo
    }

    gotoReset(){
      console.log("reset");
      
      this.router.navigate(['/forgot-password']);
    }
  

}
