import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  formValue: any[] = [];

  constructor(private router: Router, private formservice: FormService) {
    this.formValue = this.formservice.getFormValue();
  }

  addUser() {
    this.router.navigate(['/addusers']);
  }

  editUser(){

  }

  deleteUser(index: number) {
    this.formValue.splice(index, 1);
  }
}
