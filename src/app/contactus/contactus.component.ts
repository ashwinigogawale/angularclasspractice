
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstantsService} from '../constants.service';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  panelOpenState = false;
  public successMsg: string;
  public errorMsg: string;
  fullname: string;
  date:string;
  mobileno:string;
  email: string;
  msg:string;

  constructor(private contactservice:ConstantsService){}
  ngOnInit(): void {

  }
  onSubmit() {
    this.successMsg = '';
    this.errorMsg = '';
    this.contactservice.createcontacts(this.fullname, this.date, this.mobileno, this.email, this.msg)
      .subscribe((created: User) => {
        this.fullname = '';
        this.date = '';
        this.mobileno ='';
        this.email = '';
        this.msg ='';
        const date = new Date(created.date).toDateString();
        this.successMsg = ` You Contacted  Successfully ${date}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }




}
