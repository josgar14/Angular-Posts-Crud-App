import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostFromComponent } from './components/post-from/post-from.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [ AppComponent, UserComponent, UsersComponent, NavbarComponent, PostsComponent, PostFromComponent, HomeComponent, PostComponent, NotFoundComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
	providers: [ UserService, PostService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
