import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  userObj={
    name:'',
    id:''
  }
  allUser:any;

 
constructor (private commonService:CommonService){}
  ngOnInit(): void {
    
  }
   addUser(formobj: any){
     console.log(formobj)
     this.commonService.createUser(formobj).subscribe((response)=>{
  console.log("user has been added")
     })
   }
   getLatestUser(){
  
  this.commonService.getAllUser().subscribe((response)=>{
    this. allUser = response
  })
}

editUser(user:any){
 
  this.userObj =user;
}
deleteUser(user:any){
  this.commonService.deleteUser(user).subscribe(()=>{
    this.getLatestUser();
  })
}
updateUser(){
  
  this.commonService.updateUser(this.userObj).subscribe(()=>{
    this.getLatestUser();
  })
}
  
}