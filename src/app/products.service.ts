import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uid: any;
  names: any;

  constructor(private db: AngularFirestore) { }

  getAllProduct() {
    return this.db.collection("product").snapshotChanges()
  }

  addToCart(uid: string, item: any): void {
    let obj = this.db.collection("product");
    obj.ref.transaction(val => {
      if (val == null) {
        return { name: item.name,
                cost: item.cost,
                url: item.url,
                count: 1 };
      }
      else {
        return { name: item.name,
                 cost: item.cost,
                 url: item.url, 
                 count: val.count + 1 };
      }
    });
  };

  removeFromCart(uid: string, item: any): void {
    let obj = this.db.collection(`/carts/${uid}/${item.name}`);
    obj.ref.transaction(val => {
      if (val.count > 1) {
        return { name: item.name, cost: item.cost, url: item.url, count: val.count - 1 };
      }
      else {
        return null;
      }
    });
  };

  getItemsFromCart(): any {
    this.getUid().then((uid) => {
      return this.db.collection('/product' + '/' + uid);
    });
  };
  addCustomKey(key: any, value: any) {
    const users = this.db.collection('/product' + '/' + this.uid);
    users.update({ [key]: value });
  }

  getUid(): Promise<string> {
    return this.storage.get('UID').then((value) => {
      return value;
    });
  };

}