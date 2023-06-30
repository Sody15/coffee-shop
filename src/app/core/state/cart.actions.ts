import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CartProduct } from './cart.reducer';

export const CartActions = createActionGroup({
  source: 'Cart Component',
  events: {
    'Add Item': props<{ item: CartProduct }>(),
    'Update Item': props<{ updatedItem: CartProduct }>(),
    'Remove Item': props<{ id: number }>(),
  },
});

export const HeaderActions = createActionGroup({
  source: 'Header Component',
  events: {
    'Toggle Cart': emptyProps(),
  },
});
