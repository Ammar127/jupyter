import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdmin = false;
  isPatient = false;
  isDocter = false;
  isHospital = false;
  navbarCollapsed = true; 
 
  showMenu = -1;

  user;
  imageSrc = '../../assets/images/users/1.jpg';
  constructor(
    private router: Router) { }

  

  ngOnInit() {
  }
  showMenuFunv(menu) {
    if (this.showMenu == menu) {
      return this.showMenu = -1;
    }
    this.showMenu = menu;
  }
  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }

}
