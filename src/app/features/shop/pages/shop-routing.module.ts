import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopPageComponent } from './shop-page/shop-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ShopPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
