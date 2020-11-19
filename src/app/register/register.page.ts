import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User
  currentUser
  public contactForm: FormGroup;

  constructor(public authService: AuthService, private route: Router,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    

    });
  }
  signUp() {

    // this.user = new User(this.firstName, this.lastName, this.email, this.password);
    this.authService.signUpUser(this.contactForm.value);
    this.route.navigate(['login']);
    this.authService.getCurrentUser()
  }
  }


