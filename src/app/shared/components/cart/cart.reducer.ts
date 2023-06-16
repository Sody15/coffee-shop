import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, reset, toggleCart, updateItem } from './cart.actions';
import { Product } from 'src/app/core/models/product';

export interface CartProduct extends Omit<Product, 'desc'> {
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  items: CartProduct[];
  isOpen: boolean;
}

export const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => {
    const match = state.items.filter((i) => i.id === item.id);
    if (match.length) {
      let updatedItems: CartProduct[];
      // If the item already exists in the cart and quantity is 0, remove it
      if (item.quantity === 0) {
        updatedItems = state.items.filter((i) => i.id !== item.id);
        return { ...state, items: [...updatedItems] };
      }
      // If the item already exists in the cart, update its total price and quantity
      updatedItems = state.items.map((i) => {
        if (i.id === item.id) {
          const updatedPrice = item.quantity * i.price;

          const updatedItem = { ...i, totalPrice: updatedPrice, quantity: item.quantity };
          return updatedItem;
        }
        return i;
      });
      // Return the updated state with the updated items array
      return { ...state, items: [...updatedItems] };
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      return { ...state, items: [...state.items, { ...item }] };
    }
  }),
  on(updateItem, (state, { updatedItem }) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    return { ...state, items: [...updatedItems] };
  }),
  on(removeItem, (state, { id }) => {
    return { ...state, items: [...state.items.filter((item) => item.id !== id)] };
  }),
  on(reset, () => initialState),
  on(toggleCart, (state) => ({ ...state, isOpen: !state.isOpen }))
);
