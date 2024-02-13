import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
login()
{
  debugger;
  let loginInfo = {
    email: this.loginForm.get('email')?.value,
    password: this.loginForm.get('password')?.value,
  };
}
  loginForm: FormGroup;
  hidePassword: boolean = true;

constructor(private fb:FormBuilder) 
{
  this.loginForm=fb.group({
    email: fb.control('', [Validators.required]),
    password: fb.control('', [Validators.required])
  });
 
}
}
