import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(selectCart, (state: CartState) => state.items);
export const selectCartNumItems = createSelector(selectCart, (state: CartState) => state.items?.length);
