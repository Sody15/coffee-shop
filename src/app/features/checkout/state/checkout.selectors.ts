import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CheckoutState } from './checkout.reducer';

export const selectCheckout = createFeatureSelector<CheckoutState>('checkout');
