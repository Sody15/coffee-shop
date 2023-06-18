import { createReducer, on } from '@ngrx/store';
import { submitInfoForm, updateStepperIndex } from './checkout.actions';

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

export interface CheckoutState {
  info: Info | undefined;
  stepperIndex: number;
}

const initialState: CheckoutState = {
  info: undefined,
  stepperIndex: 0,
};

export const checkoutReducer = createReducer(
  initialState,
  on(submitInfoForm, (state, { info }) => {
    return { ...state, info };
  }),
  on(updateStepperIndex, (state, { stepperIndex }) => {
    return { ...state, stepperIndex };
  })
);
