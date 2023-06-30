import { Component, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

import { InfoFormComponent } from '../../forms/info-form/info-form.component';
import CheckoutActions from '../../state/checkout.actions';
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

  cartState$: Observable<any> = this.store.pipe(select(selectCartAndSubTotal));
  checkoutState$: Observable<CheckoutState> = this.store.pipe(select(selectCheckout));

  state$: Observable<State> = combineLatest([this.cartState$, this.checkoutState$]).pipe(
    map(([cart, checkout]) => ({ cart, checkout }))
  );

  constructor(private store: Store<{ cart: CartState; checkout: CheckoutState }>) {}

  submitInfoForm(formValues: any) {
    this.store.dispatch(CheckoutActions.submitInfoForm({ info: formValues }));
    this.updateStepperIndex(1);
  }

  updateStepperIndex(stepperIndex: number) {
    this.store.dispatch(CheckoutActions.updateStepperIndex({ stepperIndex }));
  }

  updateShippingMethod(shippingMethodId: string) {
    this.store.dispatch(CheckoutActions.setShippingMethod({ shippingMethodId }));
  }
}
