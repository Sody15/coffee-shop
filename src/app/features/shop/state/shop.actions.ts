import { createAction, props } from '@ngrx/store';

import { FilterType } from './shop.reducer';

export const filterBy = createAction('[ProductFilter Component] Filter Products', props<{ filter: FilterType }>());
export const selectProduct = createAction('[Shop Component] Select Product', props<{ productId: number }>());
