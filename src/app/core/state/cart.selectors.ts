import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const rootKey = 'cart';

export const selectCart = createFeatureSelector<CartState>(rootKey);

export type CartAndSubTotal = CartState & {
  subTotal: number;
};

export const selectCartItems = createSelector(selectCart, (state: CartState) => state.items);
export const selectCartNumItems = createSelector(selectCart, (state: CartState) => state.items?.length);
export const selectCartSubTotal = createSelector(selectCart, (state: CartState) =>
  state.items.reduce((acc, cur) => acc + cur.totalPrice, 0)
);

export const selectCartAndSubTotal = createSelector(
  selectCart,
  selectCartSubTotal,
  (state: CartState, subTotal: number): CartAndSubTotal => ({
    ...state,
    subTotal,
  })
);
