import { Component, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

import { InfoFormComponent } from '../../forms/info-form/info-form.component';
import { setShippingMethod, submitInfoForm, updateStepperIndex } from '../../state/checkout.actions';
import { CheckoutState } from '../../state/checkout.reducer';
import { selectCheckout } from '../../state/checkout.selectors';

import { CartState } from '@app-core/state/cart.reducer';
import { CartAndSubTotal, selectCartAndSubTotal } from '@app-core/state/cart.selectors';

type State = {
  cart: CartAndSubTotal;
  checkout: CheckoutState;
};

@Component({
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent {
  @ViewChild(InfoFormComponent, { static: false }) infoFormComponent!: InfoFormComponent;

  promoCode = '';

  cartState$: Observable<any>;
  checkoutState$: Observable<CheckoutState>;

  state$: Observable<State>;

  constructor(private store: Store<{ cart: CartState; checkout: CheckoutState }>) {
    this.cartState$ = this.store.pipe(select(selectCartAndSubTotal));
    this.checkoutState$ = this.store.pipe(select(selectCheckout));

    this.state$ = combineLatest([this.cartState$, this.checkoutState$]).pipe(
      map(([cart, checkout]) => ({ cart, checkout }))
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
