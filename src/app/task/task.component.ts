import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators }   from '@angular/forms';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
registerform= new FormGroup({
firstname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
lastname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
email:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)])),
phoneno:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(10),Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)])),
password:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
check:new FormControl(false,Validators.requiredTrue)
}) 


register(){
  console.log(this.registerform.value);
  
}

}