import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIService } from './api.service';

interface Gebruiker
{
  id: Number;
  name: String;
}
interface Notitie
{
  id: Number;
  content: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'NotesApp';
  private apiServiceApp;
  route;
  gebruikers : Gebruiker[] = [];
  naamToevoegen;
  naamVerwijderen;
  naamNotitieToevoegen;
  naamNotitieTonen;
  notities : Notitie[] = [];
  notitieToevoegen;

  constructor(apiService: APIService)
  {
    this.apiServiceApp = apiService;
  }  
  
  GetUsers()
  {
    this.apiServiceApp.getUsers().subscribe((data: Gebruiker[]) => {
         console.log(data);
        this.gebruikers = data;
      })
  }
  GetNotities()
  {
    this.apiServiceApp.getNotities().subscribe((data: Notitie[]) => {
         console.log(data);
        this.notities = data;
      })
  }
  GetNotitiesVanGebruiker()
  {
    alert(this.naamNotitieTonen);
    this.apiServiceApp.getNotitiesVanGebruiker(this.naamNotitieTonen).subscribe((data: Notitie[]) => {
      console.log(data);
     this.notities = data;
    });
  }
  CreateUser()
  {
    this.apiServiceApp.createUser(this.naamToevoegen).subscribe((data) => {
      console.log(data);
    });
  }
  CreateNotitie()
  {
    this.apiServiceApp.createNotitie(this.naamNotitieToevoegen, this.notitieToevoegen).subscribe((data) => {
      console.log(data);
    });
  }
  DeleteUser()
  {
    this.apiServiceApp.deleteUser(this.naamVerwijderen).subscribe((data) => {
        console.log(data);
    });
  }
}
