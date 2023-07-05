import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { TaskComponent } from './home/task/task.component';
import { HomeComponent } from './home/home.component';
import { AddusersComponent } from './users/addusers/addusers.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { EdituserComponent } from './users/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    UsersComponent,
    TaskComponent,
    HomeComponent,
    AddusersComponent,
    NavbarComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
