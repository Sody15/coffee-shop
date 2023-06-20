import { createReducer, on } from '@ngrx/store';
import { setShippingMethod, submitInfoForm, updateStepperIndex } from './checkout.actions';

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

export type ShippingMethod = {
  id: number;
  name: string;
  carrier: 'USPS' | 'UPS';
  type: 'standard' | 'priority' | 'ground' | '2nd day' | 'next day';
  rate: number;
  isFree?: boolean;
};

export interface CheckoutState {
  info: Info | undefined;
  shippingMethodId: number;
  stepperIndex: number;
}

const initialState: CheckoutState = {
  info: undefined,
  shippingMethodId: 1,
  stepperIndex: 0,
};

export const checkoutReducer = createReducer(
  initialState,
  on(submitInfoForm, (state, { info }) => {
    return { ...state, info };
  }),
  on(updateStepperIndex, (state, { stepperIndex }) => {
    return { ...state, stepperIndex };
  }),
  on(setShippingMethod, (state, { shippingMethodId }) => {
    return { ...state, shippingMethodId };
  })
);
