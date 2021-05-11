import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string= "";

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  isAuthenticated(){
    return this.authService.isLoggedIn();
  }

  search(searchText: string){
    console.log(searchText);
  }
  
}
