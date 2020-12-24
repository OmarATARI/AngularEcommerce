import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productsArray: array;
  public soldProductsArray: array;
  private soldIdIncrement: number;

  constructor(){
    this.productsArray = [{
        id: 1,
        name: 'Shuriken',
        quantity: 10,
        price: 5,
        description: 'A classic weapon to launch on your enemy.',
        imageSource: '../assets/images/shuriken.jpg'
      },{
        id: 2,
        name: 'Kunai',
        quantity: 15,
        price: 8,
        description: 'A classic weapon for melee and distance',
        imageSource: '../assets/images/kunai.jpg'
      },{
        id: 3,
        name: 'SpellBook',
        quantity: 20,
        price: 13,
        description: 'Learn new jutsu !',
        imageSource: '../assets/images/spellbook.png'
      }
    ];
    this.soldProductsArray = [];
    this.soldIdIncrement = 0;
  }

  getProducts(id): Observable<any>{
    if(id !== undefined){
      return of(this.productsArray[id-1]);
    }
    return of(this.productsArray);
  }

  // remove 1 quantity when a product purchased
  updateQuantity(id: number){
    this.productsArray[id-1].quantity -= 1 ;
    return this.productsArray[id-1].quantity;
  }

  // for each product purchased the price is increased of 2€.
  updatePrice(id: number){
    this.productsArray[id-1].price += 2 ;
    return this.productsArray[id-1].price;
  }

  // save sold product in an array object of products ids associated with quantity
  saveSoldProduct(product: any): void {
    this.soldIdIncrement +=1;
    this.soldProductsArray.push({...product, idSoldProduct: this.soldIdIncrement});
  }

  getSoldProducts(){
    return of(this.soldProductsArray);
  }


  //   ================= Relevant for static data only

  // // save sold product in an array object of products ids associated with quantity
  // saveSoldProduct(product: any): void {
  //   let newSoldProduct = this.soldProductsArray.filter( prod => prod.id == product.id );
  //
  //   if (newSoldProduct.length == 0){
  //     //this.soldProductsArray.push({ product: product, basketQuantity: 1 });
  //     this.soldProductsArray.push({ ...product, basketQuantity: 1 });
  //   }else{
  //     newSoldProduct[0]['basketQuantity'] += 1
  //   };
  //
  //   console.log(this.soldProductsArray);
  //   //this.setBasketProducts();
  // }
  //
  // setBasketProducts(): void {
  //   this.soldProductsArray.map( soldProduct => {
  //     if(this.basketProducts.filter( basketProduct =>  basketProduct.id == soldProduct.id ).length == 0){
  //       let basketProduct = {...this.productsArray.filter( product =>  product.id == soldProduct.id )[0], ...soldProduct }
  //       this.basketProducts.push(basketProduct);
  //     }else{
  //       this.basketProducts.map( basketProduct =>  basketProduct.id == soldProduct.id ? basketProduct.basketQuantity += 1 : false )
  //     };
  //   });
  // }
}
