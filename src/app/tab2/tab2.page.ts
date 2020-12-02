import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cart: any
  product
  uid
  cartList 
  constructor(private prod: ProductsService, private saleService : SalesService , private router: Router, private db: AngularFirestore) {
  this.router.getCurrentNavigation().extras.state
  this.product = history.state
  }
  ngOnInit() {
    this.getAddedCart();
}
getAddedCart(){
  this.cartList = this.saleService.getCart()
  console.log(this.cartList);
  
}
getTotal(){
  return this.cart.reduce((i,j)=> i + j.price * j.amout,0)
}
checkout(){
  this.router.navigate(['/checkout'])
}

}
