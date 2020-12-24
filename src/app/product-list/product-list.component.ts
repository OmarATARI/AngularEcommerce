import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  produits: any;

  constructor(private router: Router, private productsSource: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  //Loaded on init
  getProducts(){
    this.productsSource.getProducts().subscribe(produit => {
      this.produits = produit
    });
  }
  //Called in template onClick() event
	onChose(produit: any){
		this.router.navigate(['/products', produit.id]);
	}
}
