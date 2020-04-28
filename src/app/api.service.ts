import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { not } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  route;
  
  constructor(private http: HttpClient) { 
    this.route = 'https://jensjorisdecorte-backend-example-4.glitch.me'
  }
  //bewerkingen op "/users"
  //haal de lijst van alle gebruikers op
  getUsers = () => {
    return this.http.get(this.route + "/users");
  }
  //voeg een gebruiker toe
  addUser = (name: string) => {
    alert(name);
    return this.http.post(this.route + "/users", {name: name});
  }
  //verwijder een gebruiker
  deleteUser = (name: string) => {
    return this.http.delete(this.route + "/users?name=" + name);
  }

  //bewerkingen op "/Notes"
  //haal de lijst van alle notities op
  getNotes = () => {
    return this.http.get(this.route + "/notesAll");
  }
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  //getNotesFromUserWithQueryToNotes = (name: string) => {
    //return this.http.get(this.route + "/notesUser?name="+name);
  //}
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  getNotesFromUser = (name: string) => {
    return this.http.get(this.route + "/users/"+name+"/notes");
  }
  //voeg een notitie toe een bepaalde gebruiker
  addNoteForUser = (name: string, note: string) => {
    alert(name + "/n" + note);
    return this.http.post(this.route + "/notes", {name: name, content: note});
  }
}
