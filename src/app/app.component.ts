import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { FormGroup, FormControl, Validators }   from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9curd';

  isEdit=false;
  userObj={
    name:'',
    mobile:'',
    email:'',
    qualification:'',
    id:'',
    designation:'',
    salary:'',
    gender:'',
    languages:''
  }

  allUser:any;
constructor(private commonService:CommonService){}
ngOnInit(){
  this.getLatestUser();
}
addUser(formObj:any){
  console.log(formObj)
  this.commonService.createUser(formObj).subscribe((response)=>{
    this.getLatestUser();
  })
}
getLatestUser(){

  this.commonService.getAllUser().subscribe((response)=>{
    this. allUser = response
  })
}
editUser(user:any){
 this.isEdit= true;
  this.userObj =user;
}
deleteUser(user:any){
  this.commonService.deleteUser(user).subscribe(()=>{
    this.getLatestUser();
  })
}
updateUser(){
  this.isEdit=!this.isEdit;
  this.commonService.updateUser(this.userObj).subscribe(()=>{
    this.getLatestUser();
  })
}
}
