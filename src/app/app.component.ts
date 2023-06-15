import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from './shared/components/cart/cart.reducer';

@Component({
  selector: 'cof-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCartOpen$!: Observable<boolean>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.isCartOpen$ = this.store.select((state) => state.cart.isOpen);
  }
}
