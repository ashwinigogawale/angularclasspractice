import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform= new FormGroup({
    email:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)])),
    password:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
  })
  
  login(){
    console.log(this.loginform.value);
    
  }
}
