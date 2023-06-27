import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CheckoutState } from './checkout.reducer';

export const featureCheckoutKey = 'checkout';

export const selectCheckout = createFeatureSelector<CheckoutState>(featureCheckoutKey);
