import { Component, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

import { InfoFormComponent } from '../../forms/info-form/info-form.component';
import { setShippingMethod, submitInfoForm, updateStepperIndex } from '../../state/checkout.actions';
import { CheckoutState } from '../../state/checkout.reducer';
import { selectCheckout } from '../../state/checkout.selectors';

import { CartState } from '@app-core/state/cart.reducer';
import { selectCart, selectCartSubTotal } from '@app-core/state/cart.selectors';

type State = {
  cart: CartState;
  checkout: CheckoutState;
  subTotal: number;
};

@Component({
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent {
  @ViewChild(InfoFormComponent, { static: false }) infoFormComponent!: InfoFormComponent;

  promoCode = '';

  cartState$: Observable<CartState>;
  checkoutState$: Observable<CheckoutState>;
  subTotal$: Observable<number>;

  state$: Observable<State>;

  constructor(private store: Store<{ cart: CartState; checkout: CheckoutState }>) {
    this.cartState$ = this.store.select(selectCart);
    this.checkoutState$ = this.store.select(selectCheckout);
    this.subTotal$ = this.store.select(selectCartSubTotal);

    this.state$ = combineLatest([this.cartState$, this.checkoutState$, this.subTotal$]).pipe(
      map(([cart, checkout, subTotal]) => ({ cart, checkout, subTotal }))
    );
  }

  submitInfoForm(formValues: any) {
    this.store.dispatch(submitInfoForm({ info: formValues }));
    this.updateStepperIndex(1);
  }

  updateStepperIndex(stepperIndex: number) {
    this.store.dispatch(updateStepperIndex({ stepperIndex }));
  }

  updateShippingMethod(shippingMethodId: string) {
    this.store.dispatch(setShippingMethod({ shippingMethodId }));
  }
}
