import { createReducer, on } from '@ngrx/store';

import CheckoutActions from './checkout.actions';

import { ShippingMethod } from '@app-core/models/shipping-method';
import { shippingMethods } from '@app-core/data';

export type Info = {
  email: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  zip: string;
};

export type PaymentInfo = {
  cardNumber: string;
  name: string;
  expDate: string;
  securityCode: string;
};

export interface CheckoutState {
  info: Info | undefined;
  shippingMethod: ShippingMethod;
  stepperIndex: number;
  promoCode: string;
}

const initialState: CheckoutState = {
  info: undefined,
  shippingMethod: shippingMethods[0],
  stepperIndex: 0,
  promoCode: '',
};

export const checkoutReducer = createReducer(
  initialState,
  on(CheckoutActions.submitInfoForm, (state, { info }) => {
    return { ...state, info };
  }),
  on(CheckoutActions.updateStepperIndex, (state, { stepperIndex }) => {
    return { ...state, stepperIndex };
  }),
  on(CheckoutActions.setShippingMethod, (state, { shippingMethodId }) => {
    // Find shipping method by id
    const shippingMethod = shippingMethods.find((method) => method.id === shippingMethodId)!;
    return { ...state, shippingMethod };
  }),
  on(CheckoutActions.applyPromoCode, (state, { promoCode }) => {
    return { ...state, promoCode };
  })
);
