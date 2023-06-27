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
  subTotal: number;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  subTotal: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => {
    // Check if item already exists in array
    const match = state.items.filter((i) => i.id === item.id);

    let updatedItems: CartProduct[];

    if (match.length) {
      // If the item already exists in the cart and quantity is 0, remove it
      if (item.quantity === 0) {
        updatedItems = state.items.filter((i) => i.id !== item.id);
        return {
          ...state,
          items: [...updatedItems],
          subTotal: updatedItems.reduce((acc, cur) => acc + cur.totalPrice, 0),
        };
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
      return {
        ...state,
        items: [...updatedItems],
        subTotal: updatedItems.reduce((acc, cur) => acc + cur.totalPrice, 0),
      };
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      updatedItems = [...state.items, { ...item }];
      return {
        ...state,
        items: [...updatedItems],
        subTotal: updatedItems.reduce((acc, cur) => acc + cur.totalPrice, 0),
      };
    }
  }),
  on(updateItem, (state, { updatedItem }) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    return { ...state, items: [...updatedItems], subTotal: updatedItems.reduce((acc, cur) => acc + cur.totalPrice, 0) };
  }),
  on(removeItem, (state, { id }) => {
    const updatedItems = state.items.filter((item) => item.id !== id);
    return { ...state, items: [...updatedItems], subTotal: updatedItems.reduce((acc, cur) => acc + cur.totalPrice, 0) };
  }),
  on(reset, () => initialState),
  on(toggleCart, (state) => ({ ...state, isOpen: !state.isOpen }))
);
