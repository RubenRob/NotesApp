import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  route;
  
  constructor(private http: HttpClient) { 
    this.route = 'https://jensjorisdecorte-backend-example-4.glitch.me'
  }

  //
  //bewerkingen op "/users"
  //
  
  //haal de lijst van alle gebruikers op
  getUsers = () => {
    return this.http.get(this.route + "/users");
  }
  //voeg een gebruiker toe
  addUser = (userName: string) => {
    return this.http.post(this.route + "/users", {userName: userName});
  }
  //haal een gebruiker op
  getUser = (userName: string) => {
    return this.http.get(this.route + "/users/"+userName);
  }
  //verwijder een gebruiker
  deleteUser = (userName: string) => {
    return this.http.delete(this.route + "/users?userName=" + userName);
  }

  //
  //bewerkingen op "/notescategory"
  //

  //haal de lijst van alle categorien op
  getCategories = () => {
    return this.http.get(this.route + "/category");
  }
  //haal de lijst van alle categorien van een gebruiker op
  getCategoriesFromUser = (userName: string) => {
    return this.http.get(this.route + "/users/"+userName+"/category");
  }
  //voeg een categorie toe voor een bepaalde gebruiker
  addCategory = ( userName: string, description : string) => {
    return this.http.post(this.route + "/users/"+userName+"/category", {description: description});
  }

  //
  //bewerkingen op "/notes"
  //
  
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  //getNotesFromUser = (userName: string) => {
   // return this.http.get(this.route + "/users/"+userName+"/notes");
  //}
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  getNotesFromUser = (userName: string, searchContent: string, category: string) => {
    return this.http.get(this.route + "/users/"+userName+"/notes?searchContent=" + searchContent + "&category=" + category);
  }
  //voeg een notitie toe een bepaalde gebruiker
  addNoteForUser = (userName: string, content: string, category : string) => {
    return this.http.post(this.route + "/users/"+userName+"/notes", {content: content, category: category});
  }
  //verwijder een notitie toe een bepaalde gebruiker
  //deleteNote = (userName: string, content: string, category : string) => {
  //  return this.http.delete(this.route + "/users/"+userName+"/notes?content=" + content+ "&category=" + category);
  //}
  deleteNote = (idNote: number) => {
    alert(idNote)
    return this.http.delete(this.route + "/notes?idNote=" + idNote);
  }
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  getNotesWithSubstringFromUser = (userName: string, searchContent: string, category: string) => {
    return this.http.get(this.route + "/users/"+userName+"/notes?searchContent=" + searchContent + "&category=" + category);
  }
}
