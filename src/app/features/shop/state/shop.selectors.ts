import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShopState } from './shop.reducer';

export const featureShopKey = 'shop';

export const selectShop = createFeatureSelector<ShopState>(featureShopKey);

export const selectShopFilter = createSelector(selectShop, (state: ShopState) => state.filter);
