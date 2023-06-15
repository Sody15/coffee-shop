import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

const transparentRoutes = ['/', '/shop', '/shop/product'];

@Component({
  selector: 'cof-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isTransparent = true;
  showCart = false;
  isMenuOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isTransparent = true;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    this.isTransparent = scrollPosition < 100;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
