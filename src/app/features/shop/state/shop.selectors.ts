import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShopState } from './shop.reducer';

export const selectShop = createFeatureSelector<ShopState>('shop');

export const selectShopFilter = createSelector(selectShop, (state: ShopState) => state.filter);
