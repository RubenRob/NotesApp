import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  route;
  
  constructor(private http: HttpClient) { 
    this.route = 'https://jensjorisdecorte-backend-example-4.glitch.me'
  }

  getUsers = () => {
    return this.http.get(this.route + "/users");
  }
  getNotities = () => {
    return this.http.get(this.route + "/notesAll");
  }
  getNotitiesVanGebruiker(naam) {
    return this.http.get(this.route + "/notes?name=" + naam);
  }
  createUser(naam){
    return this.http.get(this.route + "/add?name=" + naam);
  }
  createNotitie(naam, notitie){
    return this.http.get(this.route + "/addnote?name="+ naam + "&content=" + notitie);
  }
  deleteUser(naam){
    return this.http.get(this.route + "/remove?name=" + naam);
  }
}
