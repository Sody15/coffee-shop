import { createReducer, on } from '@ngrx/store';
import { filterBy } from './shop.actions';
import { ProductType } from 'src/app/core/models/product';

export type FilterType = ProductType | 'all';

export interface ShopState {
  filter: FilterType;
}

export const initialState: ShopState = {
  filter: 'all',
};

export const shopReducer = createReducer(
  initialState,
  on(filterBy, (state, { filter }) => {
    return { filter };
  })
);
