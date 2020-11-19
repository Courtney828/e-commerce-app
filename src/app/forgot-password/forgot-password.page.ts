import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public contactForm: FormGroup;
  email
  constructor(private _formBuilder: FormBuilder, private authenService: AuthService,private router: Router) { 
  this.contactForm = this._formBuilder.group({
    email: "",
  });
}
  ngOnInit() {
  }
  onSubmit() {
    console.log("reset");
  
    this.authenService.resetPassword(this.contactForm.value.email)
    this.router.navigate(['/login']);
  }
  
  }
