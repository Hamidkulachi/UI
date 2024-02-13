import { Component } from '@angular/core';

export interface NavigationItem {
  value: string;
  link: string;
}

@Component({
  selector: 'page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})
export class PageSideNavComponent {
  panelName: string = 'Student';
  navItems: NavigationItem[] = [];
  constructor() {
    this.navItems = [
      { value: 'Home', link: '/home' },
      { value: 'About', link: '/about' },
      { value: 'Contact', link: '/contact' }
    ];
  }
}
