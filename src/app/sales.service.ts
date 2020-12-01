import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  inputValue: any;
  userid: any;
  names: any;
  storage: any;
  cart: any
  
  constructor(private db: AngularFirestore) { }


  
  addToCart(userid: string, item: any): void {
    let obj = this.db.collection(`/product/${userid}/${item.name}`);
    obj.ref.onSnapshot(val => {
      if (val == null) {
        return { name: item.name, cost: item.cost, url: item.url, count: 1 };
      }
      else {
        return {
          name: item.name,
          cost: item.cost,
          url: item.url,
          //count: val.count + 1;
        }
        }
      });
  };

  // removeFromCart(userid: string, item: any): void {
  //   let obj = this.db.collection(`/carts/${userid}/${item.name}`);
  //   obj.ref.onSnapshot(val => {
  //     if(val.count > 1){
  //       return { name: item.name, cost: item.cost, url: item.url, count: val.count - 1};
  //     }
  //     else{
  //       return null;
  //     }
  //   });
  // };

  getItemsFromCart(): any {
    this.getUid().then((userid) => {
      return this.db.collection('/carts' + '/' + userid);
    });
  };
  //   addCustomKey(key:any, value:any) {
  //       const users = this.db.collection('/carts' + '/' + this.uid);
  //       users.update({ [key]: value });
  // }
  getUid(): Promise<string> {
    return this.storage.get('UID').then((value) => {
      return value;
    });
  };
}




