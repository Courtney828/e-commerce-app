import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  prod_List:Product []=[]
  uid: string;
  constructor(private prod: ProductsService, private router: Router, ) {}


  
  ngOnInit() {
    this.getproductLists()
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
  // addToCart(item: any){
  //   this.userData.addToCart(this.uid, item);
  // }

}


