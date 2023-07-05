import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './home/task/task.component';
import { AddusersComponent } from './users/addusers/addusers.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { EdituserComponent } from './users/edituser/edituser.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'task', component:TaskComponent},
  {path:'addusers', component:AddusersComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'edituser/:id', component:EdituserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
