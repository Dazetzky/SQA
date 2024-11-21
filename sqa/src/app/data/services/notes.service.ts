import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseurl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<any> {
    return this.http.get(this.baseurl + 'api/v1/note/list/all/note/')
  }

 /* CreateUser(username: any, text: any): Observable<any> {
    const body = {}
    return this.http.post(this.baseurl + 'api/v1/note/create/note/', body,
      {headers: {'Content-Type': 'application/json', username: 'username ' + Token}});
  }*/

  CreateNote(Username: any, Name: any): Observable<any> {
    const body = {username: Username, name: Name, userid: 1};
    const myHeaders = new HttpHeaders().set("Accept", "application/json");
    return this.http.post(this.baseurl + 'api/v1/note/create/note/', body, {headers:myHeaders});
  }

  EditNote(Name: any, Id: any): Observable<any> {
    const body = {name: Name};
    const myHeaders = new HttpHeaders().set("Accept", "application/json");
    return this.http.patch(this.baseurl + 'api/v1/note/item/note/' + Id, body, {headers:myHeaders});
  }

  DelNote(Id: any): Observable<any> {
    const body = {};
    const myHeaders = new HttpHeaders().set("Accept", "application/json");
    return this.http.post(this.baseurl + 'api/v1/note/item/note/' + Id, body, {headers:myHeaders});
  }

}



