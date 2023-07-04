import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { AddusersComponent } from './addusers/addusers.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'task', component:TaskComponent},
  {path:'addusers', component:AddusersComponent},
  {path:'navbar', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
