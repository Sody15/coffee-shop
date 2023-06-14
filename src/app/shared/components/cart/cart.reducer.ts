import { createReducer, on } from '@ngrx/store';
import { add, removeItem, reset } from './cart.actions';
import { Product } from 'src/app/core/models/product';

export interface CartProduct extends Omit<Product, 'desc'> {
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  items: CartProduct[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(add, (state, { item }) => {
    const match = state.items.filter((i) => i.id === item.id);
    if (match.length) {
      // If the item already exists in the cart, update its total price and quantity
      const updatedItems = state.items.map((i) => {
        if (i.id === item.id) {
          const updatedPrice = item.quantity * i.price;

          const updatedItem = { ...i, totalPrice: updatedPrice, quantity: item.quantity };
          return updatedItem;
        }
        return i;
      });
      // Return the updated state with the updated items array
      return { items: [...updatedItems] };
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      return { items: [...state.items, { ...item, quantity: 1, totalPrice: item.price }] };
    }
  }),
  on(removeItem, (state, { id }) => {
    return { items: [...state.items.filter((item) => item.id !== id)] };
  }),
  on(reset, () => initialState)
);
