import { createReducer, on } from '@ngrx/store';
import { filterBy, selectProduct } from './shop.actions';
import { ProductType } from 'src/app/core/models/product';

export type FilterType = ProductType | 'all';

export interface ShopState {
  filter: FilterType;
  selectedProduct: number | undefined;
}

export const initialState: ShopState = {
  filter: 'all',
  selectedProduct: undefined,
};

export const shopReducer = createReducer(
  initialState,
  on(filterBy, (state, { filter }) => {
    return { ...state, filter };
  }),
  on(selectProduct, (state, { productId }) => {
    return { ...state, selectedProduct: productId };
  })
);
