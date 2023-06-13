import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';

export const add = createAction('[Cart Component] Add Item', props<{ newItem: Product }>());
export const removeItem = createAction('[Cart Component] Remove Item', props<{ id: number }>());
export const reset = createAction('[Cart Component] Reset');
