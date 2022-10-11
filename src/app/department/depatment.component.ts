import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl:'./department.component.html',
  styleUrls: ['./department.component.scss']

})
export class DepartmentComponent implements OnInit {
  public selectedId;
  constructor(private router:Router,private route:ActivatedRoute){}
   departments = [
    {"id":1,"name":"angular"},
    {"id":2,"name":"mongodb"},
    {"id":3,"name":"node"},
    {"id":4,"name":"html"},
    {"id":5,"name":"css"},
  ]

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      let id=parseInt(params['id']);
      this.selectedId=id;
    })
  }
  onSelect(department){
    this.router.navigate(['/departments',department.id]);
  }
isSelected(department){return department.id === this.selectedId;}
}
