import { Component } from '@angular/core';
import{FormControl,FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginValidation = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/)]]

  })

  isSubmitted = false;


  constructor(private fb: FormBuilder, private router:Router) {}

  onFormSubmit(){
this.isSubmitted= true;
if(this.loginValidation.valid){
  this.router.navigate(['/home']);
}
  }
  

}
