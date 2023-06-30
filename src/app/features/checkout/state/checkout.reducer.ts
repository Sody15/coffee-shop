import { createReducer, on } from '@ngrx/store';
import CheckoutActions from './checkout.actions';

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
  id: string;
  name: string;
  carrier: 'USPS' | 'UPS';
  type: 'standard' | 'priority' | 'ground' | '2nd day' | 'next day';
  rate: number;
  isFree?: boolean;
};

export interface CheckoutState {
  info: Info | undefined;
  shippingMethod: ShippingMethod;
  stepperIndex: number;
}

export const shippingMethods: ShippingMethod[] = [
  { id: '1', carrier: 'USPS', type: 'standard', name: 'Standard', rate: 0.1, isFree: true },
  { id: '2', carrier: 'USPS', type: 'priority', name: 'USPS Priority Mail', rate: 0.12, isFree: true },
  { id: '3', carrier: 'UPS', type: 'ground', name: 'UPS Ground', rate: 0.14, isFree: true },
  { id: '4', carrier: 'UPS', type: '2nd day', name: 'UPS 2nd Day Air', rate: 0.16 },
  { id: '5', carrier: 'UPS', type: 'next day', name: 'UPS Next Day Air', rate: 0.18 },
];

const initialState: CheckoutState = {
  info: undefined,
  shippingMethod: { id: '1', carrier: 'USPS', type: 'standard', name: 'Standard', rate: 0.1, isFree: true },
  stepperIndex: 0,
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
  })
);
