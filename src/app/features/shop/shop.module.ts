import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ShopRoutingModule } from './pages/shop-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { shopReducer } from './shop.reducer';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { QuantityComponent } from './components/quantity/quantity.component';

@NgModule({
  declarations: [ShopPageComponent, ProductComponent, ProductFilterComponent, ProductPageComponent, QuantityComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule, StoreModule.forFeature('shop', shopReducer)],
})
export class ShopModule {}
