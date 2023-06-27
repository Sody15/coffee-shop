import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(selectCart, (state: CartState) => state.items);
export const selectCartNumItems = createSelector(selectCart, (state: CartState) => state.items?.length);
export const selectCartSubTotal = createSelector(selectCart, (state: CartState) =>
  state.items.reduce((acc, cur) => acc + cur.totalPrice, 0)
);
