import { NgModule, Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, LoginActivate } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthService, LoginGuard } from './service/auth.service';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LoadingComponent } from './components/loading/loading.component';
import { ClickLottieComponent } from './components/click-lottie/click-lottie.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { AlbumComponent } from './components/album/album.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    LoginFormComponent,
    SignupFormComponent,
    PostsComponent,
    UsersComponent,
    UserCardComponent,
    PostCardComponent,
    SelectedUserComponent,
    LoadingComponent,
    ClickLottieComponent,
    FooterComponent,
    AlbumComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
    
  ],
  providers: [
    AngularFirestore,
    LoginActivate,
    AuthService,
    LoginGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
