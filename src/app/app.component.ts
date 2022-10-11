import { Component } from '@angular/core';
import{freeapiService} from './services/freeapi.service';
import{comments} from './model/comments'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular9curd';

  isEdit=false;
  userObj={
    name:'',
    postId:'',
    email:'',
    body:'',
    id:''
  }

  allUser:any;
constructor(private freeapiService:freeapiService){}
ngOnInit(){
  this.getLatestUser();
}
addUser(user:any){

  this.freeapiService.createUser(user).subscribe(()=>{
    this.getLatestUser();
  })
}
getLatestUser(){

  this.freeapiService.getAllUser().subscribe((response)=>{
    this. allUser = response;
  })
}
editUser(user:any){
 this.isEdit= true;
  this.userObj =user;
}
deleteUser(user:any){
  this.freeapiService.deleteUser(user).subscribe(()=>{
    this.getLatestUser();
  })
}
updateUser(){
  this.isEdit=!this.isEdit;
  this.freeapiService.updateUser(this.userObj).subscribe(()=>{
    this.getLatestUser();
  })
}
}

