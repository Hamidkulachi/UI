import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

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
  constructor(private apiService:ApiService,private router:Router)
   {
    this.navItems = [
      { value: 'View Books', link: '/view-books' },
      { value: 'My Orders', link: '/my-orders' }
    ];
    apiService.userStatus.subscribe({
      next:(status)=>{
        if(status=='loggedin'){
          router.navigateByUrl('/home');
        } else{

        }
      },
    });
  }
}
