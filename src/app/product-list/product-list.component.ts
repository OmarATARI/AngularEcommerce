import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

	produits = [
		{ "id": 1, "name": "BingoBook" },
		{ "id": 2, "name": "Shuriken" },
		{ "id": 3, "name": "Ninjuntu basics" },
		{ "id": 4, "name": "Kunai" },
		{ "id": 5, "name": "Konoha headband"}
	]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

	onChose(produit: any){
		this.router.navigate(['/products', produit.id]);
	}
}
