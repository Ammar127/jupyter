import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  isCollapse = true;
 
  constructor(private router: Router,
    public auth: AuthService
    ) { }


  

  ngOnInit() {
  }
  
  collapse() {
    this.isCollapse = !this.isCollapse;
    const dom: any = document.querySelector('body');
    dom.classList.toggle('mini-sidebar');
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
 

}
