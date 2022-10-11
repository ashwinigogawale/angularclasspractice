import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class freeapiService {

constructor(private http:HttpClient){}
createUser(user:any){
  return this.http.post("https://jsonplaceholder.typicode.com/posts/1/",user);
  }
  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  }
  updateUser(user: { name?: string; mobile?: string; email?: string; password?: string; id: any; }){
    return this.http.put("https://jsonplaceholder.typicode.com/posts/1/comments"+user.id,user)
  }
  deleteUser(user:any){
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/1/comments"+user.id,)
  }

}
