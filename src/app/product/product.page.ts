import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  prod_List:Product []=[]
  constructor(private prod: ProductsService, private router: Router) { }

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
  // ViewProduct(product) {
  //   this.router.navigateByUrl('/product', { state: product });
  // }
 
}
