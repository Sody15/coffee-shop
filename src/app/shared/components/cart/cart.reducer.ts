import { createReducer, on } from '@ngrx/store';
import { add, removeItem, reset } from './cart.actions';
import { Product } from 'src/app/core/models/product';

export interface CartProduct extends Product {
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
  on(add, (state, { newItem }) => {
    const match = state.items.filter((item) => item.id === newItem.id);
    if (match.length) {
      // If the item already exists in the cart, update its total price and quantity
      const updatedItems = state.items.map((item) => {
        if (item.id === newItem.id) {
          const updatedItem = { ...item, totalPrice: item.price + newItem.price, quantity: item.quantity + 1 };
          return updatedItem;
        }
        return item;
      });
      // Return the updated state with the updated items array
      return { items: [...updatedItems] };
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      return { items: [...state.items, { ...newItem, quantity: 1, totalPrice: newItem.price }] };
    }
  }),
  on(removeItem, (state, { id }) => {
    return { items: [...state.items.filter((item) => item.id !== id)] };
  }),
  on(reset, () => initialState)
);
