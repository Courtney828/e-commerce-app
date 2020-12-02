import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  userProfile
  constructor(public authServive:AuthService) { }
  
  ngOnInit() {
    this.userProfile = this.authServive.userInfo
  }

}
