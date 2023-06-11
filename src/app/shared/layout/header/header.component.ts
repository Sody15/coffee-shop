import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'cof-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isTransparent = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    this.isTransparent = scrollPosition < 100;
  }
}
