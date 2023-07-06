import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { checkoutGuard } from '@app-core/guards/checkout.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
  { path: 'shop', loadChildren: () => import('./features/shop/shop.module').then((m) => m.ShopModule) },
  {
    path: 'checkout',
    loadChildren: () => import('./features/checkout/checkout.module').then((m) => m.CheckoutModule),
    canActivate: [checkoutGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
