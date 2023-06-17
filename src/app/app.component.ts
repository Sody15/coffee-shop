import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

const hideHeaderAndFooterRoutes = ['/checkout'];

@Component({
  selector: 'cof-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  hideHeaderAndFooter = true;

  constructor(private router: Router) {
    // Hide/show header and footer
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.hideHeaderAndFooter = hideHeaderAndFooterRoutes.includes(event.url);
      }
    });
  }
}
