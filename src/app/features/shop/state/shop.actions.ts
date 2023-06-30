import { createActionGroup, props } from '@ngrx/store';

import { FilterType } from './shop.reducer';

const ShopActions = createActionGroup({
  source: 'Shop Page',
  events: {
    'Filter Products': props<{ filter: FilterType }>(),
    'Select Product': props<{ productId: number }>(),
  },
});

export default ShopActions;
