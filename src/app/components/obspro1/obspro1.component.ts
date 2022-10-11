import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
@Component({
  selector: 'app-obspro1',
  templateUrl: './obspro1.component.html',
  styleUrls: ['./obspro1.component.scss']
})
export class Obspro1Component implements OnInit {
title='search result';
 public results:any=[];
  constructor(private http:HttpClient) { }
  public term =new FormControl();
  ngOnInit(): void {
    this.term.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(searchTerm=>{
      this.http.get(`https://restcountries.eu/rest/v2/name/${searchTerm}`).subscribe((data:any)=>{
        //debugger;
        console.time('request-length');
        console.log(data);
        console.timeEnd('request-length');
        this.results=data;
      });
    });
  }

}
