import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-basket',
	templateUrl: './basket.component.html',
  styles: [
  ]
})
export class BasketComponent implements OnInit {

  produits: any;
  @Input() totalPrice: number;

  constructor(private productsSource: ProductsService) {
    this.totalPrice = 0;
  }

  ngOnInit(): void {
    this.getBasketProducts();
    this.calculateTotalPrice();
  }

  //Loaded on init
  getBasketProducts(){
    this.productsSource.getSoldProducts().subscribe(produit => {
      this.produits = produit
    });
  }

  calculateTotalPrice(){
    this.produits.map( produit => {
      this.totalPrice += produit.price;
    });

    return this.totalPrice;
  }
}
