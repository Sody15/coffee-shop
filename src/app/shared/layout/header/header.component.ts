import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

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
    this.router.events.pipe().subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isTransparent = event.url === '/';
        this.canBeTransparent = event.url === '/';
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
