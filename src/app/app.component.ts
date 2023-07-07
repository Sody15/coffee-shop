import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { selectUrl } from 'src/app/routing.selectors';
import { RouterState } from '@ngrx/router-store';

const hideHeaderFooterRoutes = ['/checkout'];

@Component({
  selector: 'cof-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Hide/show header based on route
  hideHeaderFooter$: Observable<boolean> = this.store.pipe(
    select(selectUrl),
    map((url) => hideHeaderFooterRoutes.includes(url))
  );

  constructor(private store: Store<{ router: RouterState }>) {}
}
