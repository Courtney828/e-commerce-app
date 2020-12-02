import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  userID = localStorage.getItem('userID').toString()

  constructor(private db: AngularFirestore, private authService: AuthService) { }
 
  getCart() {
    this.db.collection('cart', ref => ref.where('userID', '==', this.userID)).valueChanges().subscribe(val => {
      console.log(val);
    })
  }

  addCart(product) {
    // console.log(product);

    this.db.collection("cart").add(product).then(results => {
      console.log("added");
    }).catch(err => {
      console.log(err);
    })


  }
}






