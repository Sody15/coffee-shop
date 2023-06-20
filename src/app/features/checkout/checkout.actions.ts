import { createAction, props } from '@ngrx/store';

import { Info, ShippingMethod } from './checkout.reducer';

export const submitInfoForm = createAction('[Checkout Component] Submit Info Form', props<{ info: Info }>());
export const updateStepperIndex = createAction(
  '[Checkout Component] Update Stepper Index',
  props<{ stepperIndex: number }>()
);
export const setShippingMethod = createAction(
  '[Checkout Component] Set Shipping Method',
  props<{ shippingMethodId: number }>()
);
