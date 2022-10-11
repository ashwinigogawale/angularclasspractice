import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  

  constructor(private _http:HttpClient) { }
  createUser(user:any){
    return this._http.post("http://18.221.192.129:36116",user);
    }
    getAllUser(){
      return this._http.get("http://18.221.192.129:36116")
    }
    updateUser(user: { name?: string; id: any; }){
      return this._http.put("http://18.221.192.129:36116"+user.id,user)
    }
    deleteUser(user:any){
      return this._http.delete("http://18.221.192.129:36116",)
    }
  
    
    }

