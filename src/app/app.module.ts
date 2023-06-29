import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import { cartReducer } from './core/state/cart.reducer';
import { rootKey } from './core/state/cart.selectors';
import { featureCheckoutKey } from './features/checkout/state/checkout.selectors';
import { featureShopKey } from './features/shop/state/shop.selectors';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight, heroBars3, heroShoppingCart } from '@ng-icons/heroicons/outline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

const ngIcons = { heroArrowRight, heroBars3, heroShoppingCart };

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: [rootKey, featureCheckoutKey, featureShopKey], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgIconsModule.withIcons({ ...ngIcons }),
    StoreModule.forRoot({ [rootKey]: cartReducer, router: routerReducer }, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
