import { createActionGroup, props } from '@ngrx/store';

import { Info } from './checkout.reducer';

const CheckoutActions = createActionGroup({
  source: 'Checkout Component',
  events: {
    'Submit Info Form': props<{ info: Info }>(),
    'Update Stepper Index': props<{ stepperIndex: number }>(),
    'Set Shipping Method': props<{ shippingMethodId: string }>(),
    'Apply Promo Code': props<{ promoCode: string }>(),
  },
});

export default CheckoutActions;
