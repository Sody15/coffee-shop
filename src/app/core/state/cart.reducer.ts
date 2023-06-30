import { createReducer, on } from '@ngrx/store';
import { CartActions, HeaderActions } from './cart.actions';
import { Product } from 'src/app/core/models/product';

export interface CartProduct extends Omit<Product, 'desc'> {
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  items: CartProduct[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => {
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
      };
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      updatedItems = [...state.items, { ...item }];
      return {
        ...state,
        items: [...updatedItems],
      };
    }
  }),
  on(CartActions.updateItem, (state, { updatedItem }) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    return { ...state, items: [...updatedItems] };
  }),
  on(CartActions.removeItem, (state, { id }) => {
    const updatedItems = state.items.filter((item) => item.id !== id);
    return { ...state, items: [...updatedItems] };
  }),
  on(HeaderActions.toggleCart, (state) => ({ ...state, isOpen: !state.isOpen }))
);
