import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	private nameSource: any = new BehaviorSubject<string>("Produit test");
	currentName = this.nameSource.asObservable();

  constructor() { }

	changeMessage(name: string) {
		this.nameSource.next(name)
	}
}
