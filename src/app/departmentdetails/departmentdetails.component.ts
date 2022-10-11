import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';
@Component({
  selector: 'app-departmentdetails',
  template: `<h3>you selected department with id ={{departmentId}}</h3>
    <a (click)="goPrevious()">previous</a><br>
    <a (click)="goNext()">Next</a>
   <p><button (click)="gotoDepartments()">Back</button> </p>
  `,
  styles: []
})
export class DepartmentdetailsComponent implements OnInit {
   public departmentId;

  constructor(private route:ActivatedRoute,private router:Router) { }

  /*ngOnInit() {
  let id=parseInt(this.route.snapshot.paramMap.get('id'));
  this.departmentId=id;
  }*/
  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      let id=parseInt(params['id']);
      this.departmentId=id;
    })
  }
goPrevious(){
  let previousId=this.departmentId - 1;
  this.router.navigate(['/departments',previousId]);
}
goNext(){
  let NextId=this.departmentId + 1;
  this.router.navigate(['/departments',NextId]);
}
gotoDepartments(){
  let selectedId=this.departmentId? this.departmentId : null;
  this.router.navigate(['/departments', {id: selectedId,random:"random"}]);
}
}

