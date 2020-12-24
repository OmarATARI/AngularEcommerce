import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/products', pathMatch: 'full' },
	{ path: 'products', component: ProductListComponent },
	{ path: 'products/:id', component: ProductDetailsComponent },
	{ path: 'basket', component: BasketComponent },
	{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductListComponent, BasketComponent]
