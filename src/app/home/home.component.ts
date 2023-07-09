import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToUsers(): void {
    this.router.navigate(['/users']);
  }

  goToTask(): void {
    this.router.navigate(['/task']);
  }

  logOut(){
    this.router.navigate(['/login']);
  }
}