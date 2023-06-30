import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';
import { selectRouteParam } from 'src/app/routing.selectors';
import { PRODUCTS } from '@app-core/data';

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

export const selectProductPageView = createSelector(selectRouteParam('id'), selectCartItems, (productId, cartItems) => {
  if (!productId) {
    return null;
  }

  // Set Product
  const product = PRODUCTS.filter((p) => p.id === +productId!)[0];

  // Get quantity
  const itemInCart = cartItems.filter((cartProd) => cartProd.id === +productId)[0];
  const qty = itemInCart ? itemInCart.quantity.toString() : '1';

  // Set inCart
  const inCart = itemInCart ? 'true' : 'false';

  return { product, qty, inCart };
});
