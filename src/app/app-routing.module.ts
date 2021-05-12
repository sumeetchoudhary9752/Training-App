import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { Observable } from 'rxjs';
import { AuthService, LoginGuard } from './service/auth.service';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule, Injectable} from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';


@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.authService.user) {
      this.router.navigate(['signup']);
    }
    return true;
  }
}

const routes: Routes = [
  {path: "", component:LoginFormComponent,},
  {path: "signup", component:SignupFormComponent},
  {path: "albums", component:AlbumComponent, canActivate:[LoginGuard]},
  {path: "posts", component:PostsComponent, canActivate:[LoginGuard]},
  {path: "users", component:UsersComponent, canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
