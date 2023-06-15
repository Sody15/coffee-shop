import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

const transparentRoutes = ['/', '/shop'];

@Component({
  selector: 'cof-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  canBeTransparent = true;
  isTransparent = true;
  showCart = false;
  isMenuOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isTransparent = transparentRoutes.includes(event.url);
        this.canBeTransparent = this.isTransparent;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.canBeTransparent) {
      const scrollPosition = window.pageYOffset;
      this.isTransparent = scrollPosition < 100;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
