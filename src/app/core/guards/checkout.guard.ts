import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs';

import { selectCartNumItems } from '@app-core/state/cart.selectors';

// Guard to check if there are items in the cart before allowing navigation to the checkout page
export const checkoutGuard: CanActivateFn = () => {
  let numItems = 0;

  // Inject the Store and select the number of items from the cart state
  inject(Store)
    .pipe(select(selectCartNumItems), take(1))
    .subscribe((num) => (numItems = num));

  // Allow navigation to the checkout page if there are items in the cart
  if (numItems > 0) {
    return true;
  }

  // Navigate to base route
  const router = inject(Router);
  router.navigateByUrl('/');
  return false;
};
