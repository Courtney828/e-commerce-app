import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  prod_List:Product []=[]
  products: any
  cart: any
  constructor(private prod: ProductsService, private sales: SalesService ,private router: Router ) {}


  
  ngOnInit() {
    this.getproductLists()
  }
  
  addToCart(product) {
    // console.log(product);
    let userId = localStorage.getItem('userID')
    this.cart = {
      userID: userId,
      quantity: 1,
      product
    }
    console.log(this.cart);

    this.sales.addCart(this.cart)

  }

  getproductLists() {
    return this.prod.getAllProduct().subscribe(res => {
      this.prod_List = res.map((product) => {
        return {
          ...product.payload.doc.data(),
          
          id:product.payload.doc.id

        } as Product
      })
    })
  }

}


