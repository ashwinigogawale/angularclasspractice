import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
apiUrl='http://18.221.192.129:36116/api/AttendanceAPI/GetDepartment';
  constructor(private _http:HttpClient) { }

createUser(user: any){
return this._http.post("http://18.221.192.129:36116/api/AttendanceAPI/GetDepartment",user);
}
getAllUser(){
  return this._http.get<User[]>(this.apiUrl)
}

updateUser(user: { name?: string; mobile?: string; email?: string; password?: string; id: any; }){
  return this._http.put("http://18.221.192.129:36116/api/AttendanceAPI/GetDepartment"+user.id,user)
}
deleteUser(user:any){
  return this._http.delete("http://18.221.192.129:36116/api/AttendanceAPI/GetDepartment"+user.id,)
}
}
