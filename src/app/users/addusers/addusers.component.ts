import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl,FormArray,ValidatorFn } from '@angular/forms';
import { FormService } from '../../form.service';
import { Router } from '@angular/router';

function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
  const phoneNumberRegex = /^\+\d{1,3}\d{10}$/;
  const value = control.value;

  if (!phoneNumberRegex.test(value)) {
    return { 'pattern': true };
  }

  return null;
}

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
  formValidation = this.fb.group({
    uid:['',Validators.required],
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    address: ['', Validators.required],
    dob: ['', Validators.required],
    email: this.fb.array([
      this.fb.control('')
    ]),
    phonenumber: ['', [Validators.required, phoneNumberValidator]],
    gender: ['', Validators.required]
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder, private formservice: FormService, private router: Router) { }

  addUsers() {
    this.isSubmitted = true;

    if (this.formValidation.invalid) {
      return;
    }

    const user = {
      uid: this.formValidation.get('uid')?.value, 
      name: this.formValidation.get('name')?.value,
      address: this.formValidation.get('address')?.value,
      dob: this.formValidation.get('dob')?.value,
      email:this.formValidation.get('email')?.value,
      phonenumber: this.formValidation.get('phonenumber')?.value,
      gender: this.formValidation.get('gender')?.value
    };

    this.formservice.addUser(user);

    this.router.navigate(['/users']);
  }

  get emails(){
    return this.formValidation.get('email') as unknown as FormArray;
  }

  addEmails(){
    this.emails.push(this.fb.control(''));
  }

  deleteEmails(index:number): void{
    this.emails.removeAt(index);
  }
  canDeleteEmail(): boolean {
    const emailsArray = this.formValidation.get('email') as FormArray;
    return emailsArray.length > 1;
  }
}
