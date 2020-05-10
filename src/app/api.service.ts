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
  //haal een gebruiker op
  getUser = (userName: string) => {
    return this.http.get(this.route + "/users/"+userName);
  }
  //voeg een gebruiker toe
  addUser = (userName: string) => {
    return this.http.post(this.route + "/users", {userName: userName});
  }
  //verwijder een gebruiker
  delUser = (userId: number) => {
    return this.http.delete(this.route + "/users?userId=" + userId);
  }

  //
  //bewerkingen op "/Categories"
  //

  //haal de lijst van alle categorien op
  getCategories = () => {
    return this.http.get(this.route + "/categories");
  }
  //haal de lijst van alle categorien van een gebruiker op
  getCategoriesOfUser = (userId: number) => {
    return this.http.get(this.route + "/users/"+userId+"/categories");
  }
  //voeg een categorie toe voor een bepaalde gebruiker
  addCategoryForUser = ( userId: number, description: string, color: string) => {
    return this.http.post(this.route + "/users/"+userId+"/categories", {description: description, color: color});
  }
  //verwijder een gebruiker
  delCategoriesOfUser = (categoryId: number) => {
    return this.http.delete(this.route + "/categories?categoryId=" + categoryId);
  }

  //
  //bewerkingen op "/notes"
  //
  
  //haal de lijst van alle notities op
  getNotes = () => {
    return this.http.get(this.route + "/notes");
  }
  //haal de lijst van alle notities van een gebruiker op
  getNotesOfUser = (userId: number) => {
    return this.http.get(this.route + "/users/"+userId+"/notes");
  }
  //haal de lijst van alle notities van een gebruiker op
  getNotesOfUserWithCategoryFilter = (userId: number, categoryId: number) => {
    return this.http.get(this.route + "/users/"+userId+"/categories/"+categoryId+"/notes");
  }
  //voeg een notitie toe voor een bepaalde gebruiker
  addNoteForUser = ( userId: number, categoryId: number, content: string) => {
    return this.http.post(this.route + "/users/"+userId+"/categories/"+categoryId+"/notes", {content: content});
  }
  //voeg een notitie toe voor een bepaalde gebruiker
  updateNoteOfUser = ( noteId: number, categoryId: number, content: string) => {
    return this.http.patch(this.route + "/notes/"+noteId, {categoryId: categoryId, content: content});
  }
  //voeg een notitie toe voor een bepaalde gebruiker
  delNoteOfUser = ( noteId: number) => {
    return this.http.delete(this.route + "/notes?noteId=" + noteId);
  }

}