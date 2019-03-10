import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/api/users/signup";
  private _loginUrl = "http://localhost:8080/api/users/signin";
  private _getUsers = "http://localhost:8080/api/users";
  data: any;

  constructor(private http: HttpClient, private router: Router) { 

  }

  

  registerUser(user) {
    return this.http.post<any>(this._registerUrl,user)
  }


  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  listUsers(){
    this.data = this.http.get(this._getUsers)

    return this.data;
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
