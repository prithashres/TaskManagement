import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl,FormArray,ValidatorFn } from '@angular/forms';
import { FormService } from '../../form.service';
import { ActivatedRoute, Router } from '@angular/router';

function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
  const phoneNumberRegex = /^\+\d{1,3}\d{10}$/;
  const value = control.value;

  if (!phoneNumberRegex.test(value)) {
    return { 'pattern': true };
  }

  return null;
}

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  
  id: string | null;
  formValidation = this.fb.group({
    uid: ['', Validators.required],
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

  constructor(private fb: FormBuilder, private formservice: FormService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  user: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.formservice.getFormValue().find((user: any) => user.uid === this.id);
  
    if (this.user) {
      this.formValidation.patchValue({
        uid: this.user.uid,
        name: this.user.name,
        address: this.user.address,
        dob: this.user.dob,
        email: this.user.email,
        phonenumber: this.user.phonenumber, 
        gender: this.user.gender
      });
    }
  }
  
  

  updateUser() {
    this.isSubmitted = true;

    if (this.formValidation.invalid) {
      return;
    }

    if (this.user) {
      this.user.name = this.formValidation.get('name')?.value;
      this.user.address = this.formValidation.get('address')?.value;
      this.user.dob = this.formValidation.get('dob')?.value;
      this.user.email = this.formValidation.get('email')?.value;
      this.user.phonenumber = this.formValidation.get('phonenumber')?.value;
      this.user.gender = this.formValidation.get('gender')?.value;

      this.formservice.updateUser(this.user);

    }
    console.log(this.user);
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
