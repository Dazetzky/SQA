import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

/*  createUser(Email: any, Username: any, Password: any): Observable<any> {
    const body = {email: Email, username: Username, password: Password};
    return this.http.post(this.baseurl + 'api/v1/auth/users/', body);
  } */

    //получение токена для пользователя

  getToken(Email: any, Username: any, Password: any): Observable<any> {
    const body = {email: Email, username: Username, password: Password};
    return this.http.post(this.baseurl + 'api/v1/auth-token/token/login', body);
  }

  getUserWithToken(Token: any): Observable<any> {
    const body = {}
    return this.http.post(this.baseurl + 'api/v1/user/user/by/token/', body,
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + Token}});
  }

}
