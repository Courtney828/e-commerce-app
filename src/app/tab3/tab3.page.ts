import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userProfile
  constructor(public authServive:AuthService, public router:Router) {}


ngOnInit(): void {
this.userProfile = this.authServive.userInfo
console.log(this.userProfile);

}
logout(){
  console.log("loggin out");
  this.authServive.logout()
  this.router.navigateByUrl("/login")

}

}
