import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  inputValue: any;
  uid: any;
  names: any;
  storage: any;
  cart: any
  
  product: any = []
  constructor(private db: AngularFirestore) { }

  getAllProduct() {
    this.cart = this.db.collection("product").snapshotChanges()
    return this.cart;
  }
  saveProduct(product) {

    this.db.collection("products").add(
      {
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productImage: product.productImage,
      }).then(results =>
      console.log("Successful")

    ).catch(error => {
      console.log(error);
    })
  }

  getProducts() {
    this.db.collection("products").snapshotChanges().subscribe(results => {
      results.forEach((doc) => {
        this.product.push(doc.payload.doc.data())
        this.product.map(prod => {
          prod['id'] = doc.payload.doc.id;
        })
        console.log(this.product);
      });
    });
    return this.product
  }
}

