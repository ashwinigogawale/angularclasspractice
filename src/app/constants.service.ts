import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConstantsService {

  private BASE_URL = environment.API_URL;
  constructor(private httpclient:HttpClient){}

  getcontacts(): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.BASE_URL}/contacts`);
  }

  createcontacts(fullname: string, date: string, mobileno: string, email: string, msg: string): Observable<User> {
    return this.httpclient.post<User>(`${this.BASE_URL}/contacts`, { fullname,date,mobileno,email,msg });
  }
  cancelAppointment(id: string): Observable<any> {
    return this.httpclient.delete(`${this.BASE_URL}/contacts/${id}`);
  }
}
