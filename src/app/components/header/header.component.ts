import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string= "";
  calendar: any;

  constructor(public authService: AuthService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.calendar = this.datePipe.transform(new Date());
  }

  isAuthenticated(){
    return this.authService.isLoggedIn();
  }

  search(searchText: string){
    console.log(searchText);
  }
  

}
