import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formValue: any[] = [];

  getFormValue() {
    return this.formValue;
  }

  addUser(user: any) {
    this.formValue.push(user);
  }
}
