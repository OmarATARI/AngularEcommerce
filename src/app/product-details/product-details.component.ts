import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

	public productId: any;
	public productName: any;
	private name: any;

  constructor(private route: ActivatedRoute, private router: Router, private data: ProductsService) { }

  ngOnInit(): void {
		this.data.currentName.subscribe((name: any) => this.name = name)
		this.route.params.subscribe(params => {
      this.productId = +params['id'];
			this.productName = +params['name'];
    });
  }

	goPrevious(){
		let previousId = this.productId - 1;
		this.router.navigate(['/products', previousId])
	}

	goNext(){
		let nextId = this.productId + 1;
		this.router.navigate(['/products', nextId])
	}
}
