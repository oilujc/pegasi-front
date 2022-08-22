import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/auth.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = '/users';

  constructor(
    private http: HttpClient
  ) { }
  
  createUser(data: User) {
    console.log('data', data);
    return this.http.post(`${environment.apiUrl}${this.path}`, data);
  }

  getUser() {}

}
