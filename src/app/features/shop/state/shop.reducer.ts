import { createReducer, on } from '@ngrx/store';
import ShopActions from './shop.actions';
import { ProductType } from 'src/app/core/models/product';

export type FilterType = ProductType | 'all';

export interface ShopState {
  filter: FilterType;
  selectedProduct: number | undefined;
}

const initialState: ShopState = {
  filter: 'all',
  selectedProduct: undefined,
};

export const shopReducer = createReducer(
  initialState,
  on(ShopActions.filterProducts, (state, { filter }) => {
    return { ...state, filter };
  }),
  on(ShopActions.selectProduct, (state, { productId }) => {
    return { ...state, selectedProduct: productId };
  })
);
