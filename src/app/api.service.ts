import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  route;
  fout;
  
  constructor(private http: HttpClient) { 
    this.route = 'https://jensjorisdecorte-backend-example-4.glitch.me'
  }
  getUsers = () => {
    return this.http.get(this.route + "/users");
  }
  getNotes = () => {
    return this.http.get(this.route + "/notesAll");
  }
  getUserNotes = (name: string) => {
    return this.http.get(this.route + "/notes?name=" + name);
  }
  addUser = (name: string) => {
    return this.http.post(this.route + "/users", {name: name});
  }
  addUserNote = (name: string, note: string) => {
    return this.http.post(this.route + "/addnote", {name: name, content: note});
  }
  deleteUser = (name: string) => {
    return this.http.delete(this.route + "/users?name=" + name);
  }
}
