import { createAction, props } from '@ngrx/store';
import { CartProduct } from './cart.reducer';

export const addItem = createAction('[Cart Component] Add Item', props<{ item: CartProduct }>());
export const updateItem = createAction('[Cart Component] Update Item', props<{ updatedItem: CartProduct }>());
export const removeItem = createAction('[Cart Component] Remove Item', props<{ id: number }>());
export const reset = createAction('[Cart Component] Reset');
export const toggleCart = createAction('[Header Component] Toggle Cart');
