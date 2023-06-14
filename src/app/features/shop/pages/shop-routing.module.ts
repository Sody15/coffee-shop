import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'product/:id', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
