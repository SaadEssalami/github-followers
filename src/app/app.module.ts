import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { Coursesservice } from './courses.service';
import { ResumePipe } from './resume.pipe';
import { FafouriteComponent } from './fafourite/fafourite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { GithubFollowersComponent } from './github-followers/github-follower.component';
import { GithubServiceService } from './services/github-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing-module';


 

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipe,
    FafouriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfileFollowerComponent,
    GithubFollowersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
    
  ],
  providers: [Coursesservice,PostService,GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
