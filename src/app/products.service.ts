import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsArray: array;
  // private quantity: number = new BehaviorSubject<string>(0);
  // private currentQuantity: number;

  constructor(){
    this.productsArray = [{
        id: 1,
        name: 'Shuriken',
        quantity: 10,
        price: 5,
        description: 'A classic weapon to launch on your enemy.'
      },{
        id: 2,
        name: 'Kunai',
        quantity: 15,
        price: 8,
        description: 'A classic weapon for melee and distance'
      },{
        id: 3,
        name: 'SpellBook',
        quantity: 20,
        price: 13,
        description: 'Learn new jutsu !'
      }
    ];
    //this.currentQuantity = this.quantity.asObservable();
  }

  getProducts(id): Observable<any>{
  if(id !== undefined){
    console.log(id);
    return of(this.productsArray[id-1]);
  }
  return of(this.productsArray);
  }

  // remove 1 quantity when a product purchased, refresh to reset inital values
  updateQuantity(id: number, quantity: number){
    //this.quantity.next(quantity);
    //this.productsArray[id-1].quantity = this.quantity;
    this.productsArray[id-1].quantity = quantity - 1 ;
    console.log(this.productsArray[id-1])

    return this.productsArray[id-1].quantity;
  }

  // for each product purchased the price is increased of 2€.
  updatePrice(id: number, price: number){
    this.productsArray[id-1].price = price + 2 ;

    return this.productsArray[id-1].price;
  }


}
