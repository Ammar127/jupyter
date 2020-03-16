import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShown:boolean = false;
  isCollapse = true;
  user={name: 'Ammar'};
  imageSrc;
  userSearchQuery = '';
  users: [] = [];
  constructor(private router: Router
    
    ) { }


  

  ngOnInit() {
  }
  toggleShow(){
    this.isShown = !this.isShown;
  }
  collapse() {
    this.isCollapse = !this.isCollapse;
    const dom: any = document.querySelector('body');
    dom.classList.toggle('mini-sidebar');
  }
  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
  selectUser(item) {
    this.userSearchQuery = item.username+ '   ---   ' + item.name;
    let role = item.role;
    if(role === 'hospital') {
      this.router.navigate([`/app/hospitals/profile/${item._id}`]);
    }
  }
  searchUser() {
      if(!this.checkSearchValue()) { return;} 
    // this.searchService.searchUser(this.userSearchQuery).subscribe((response: ResponseMessage) => {
    //   if(response.status == '200') {
    //     this.users = response.data;
    //   } else {
    //     this.users = [];
    //   }
      
    // });
  }
  checkSearchValue() {
    if(this.userSearchQuery === '') {
      return false;
    }
    return true;
  }

}
