import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight, heroBars3, heroXCircle, heroShoppingCart } from '@ng-icons/heroicons/outline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { cartReducer } from './shared/components/cart/cart.reducer';

const ngIcons = { heroArrowRight, heroBars3, heroXCircle, heroShoppingCart };

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    NgIconsModule.withIcons({ ...ngIcons }),
    StoreModule.forRoot({ cart: cartReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
