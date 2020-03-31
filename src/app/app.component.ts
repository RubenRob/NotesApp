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
  fout;
  gebruikers: Gebruiker[] = [];
  naamToevoegen;
  naamVerwijderen;
  naamNotitieToevoegen;
  naamNotitieTonen;
  notities: Notitie[] = [];
  notitiesGebruiker: Notitie[] = [];
  notitieToevoegen;

  constructor(apiService: APIService)
  {
    this.apiServiceApp = apiService;
    this.lijstGebruikers();
  }  
  
  lijstGebruikers = () => {
    this.apiServiceApp.getUsers().subscribe((data: Gebruiker[]) => {
      console.log(data);   
      this.gebruikers = data;
      })
  }
  lijstNotities = () => {
    this.apiServiceApp.getNotes().subscribe((data: Notitie[]) => {
         console.log(data);
        this.notities = data;
      })
  }
  lijstNotitiesVanGebruiker = () => {
    this.apiServiceApp.getUserNotes(this.naamNotitieTonen).subscribe((data: Notitie[]) => {
      console.log(data);
     this.notitiesGebruiker = data;
    });
    this.naamNotitieTonen = "";
  }
  toevoegenGebruiker = () => {
    this.apiServiceApp.addUser(this.naamToevoegen).subscribe((data) => {
      console.log(data);
    });
    this.lijstGebruikers();
    this.naamToevoegen = "";
  }
  
  toevoegenNotitieVoorGebruiker = () => {
    this.apiServiceApp.addUserNote(this.naamNotitieToevoegen, this.notitieToevoegen).subscribe((data) => {
      console.log(data);
    });
    this.naamNotitieToevoegen = "";
    this.notitieToevoegen = "";
  }
  
  verwijderenGebruiker = () => {
    this.apiServiceApp.deleteUser(this.naamVerwijderen).subscribe((data) => {
        console.log(data);
    });
    this.lijstGebruikers();
    this.naamVerwijderen = "";
  }
}
