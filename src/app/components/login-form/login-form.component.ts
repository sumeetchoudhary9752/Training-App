import { AuthService } from './../../service/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email!: string;
  password!: string;
  @ViewChild('f')
  loginForm!: NgForm;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public authService: AuthService, private toastr: ToastrService) {

  }


  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    this.loginForm.reset(); 
  }

  logout() {
    this.authService.logout();
    
  }


  ngOnInit(): void {

  }

}
