import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

	public productId: number;
	//private name: any;

  private id: number;
  private name: string;
  private price: number;
  private quantity: number;
  private description: string;

  constructor(private route: ActivatedRoute, private router: Router, private productsSource: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
    this.getCurrentProductData()
  }

  getCurrentProductData(){
    this.productsSource.getProducts(this.productId).subscribe(produit => {
      this.id = produit.id;
      this.name = produit.name;
      this.price = produit.price;
      this.quantity = produit.quantity;
      this.description = produit.description;
    });
  }

	goPrevious(){
    if(this.productId > 0 && this.productId < 4){
      console.log("productId == " + this.productId)
      let previousId = this.productId - 1;
      this.router.navigate(['/products', previousId])
      this.ngOnInit();
    }
	}

	goNext(){
    if(this.productId > 0 && this.productId < 4){
  		let nextId = this.productId + 1;
  		this.router.navigate(['/products', nextId])
      this.ngOnInit();
  	}
  }

  buyProduct(){
    this.quantity = this.productsSource.updateQuantity(this.id, this.quantity)
    this.price = this.productsSource.updatePrice(this.id, this.price)
  }
}
