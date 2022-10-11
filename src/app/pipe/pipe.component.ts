import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
    ngOnInit(): void {
        
    }
 public name="Codevolution";
 public message="welcome to home";
 public person ={
     "firstName":"Ashwini",
     "lastName":"Gogawale"
 }

public date= new Date();
    
}
