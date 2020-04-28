import { Component } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
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
  messageGebruikerToevoegen;
  messageGebruikerVerwijderen;
  gebruikers: Gebruiker[] = [];
  naamToevoegen;
  naamVerwijderen;
  naamNotitieToevoegen;
  naamNotitieTonen ="Bart";
  notities: Notitie[] = [];
  notitiesGebruiker: Notitie[] = [];
  notitiesGebruikerMetQueryOpNotes: Notitie[] = [];
  notitieToevoegen;

  constructor(apiService: APIService)
  {
    this.apiServiceApp = apiService;
    this.lijstGebruikers();
  }  
  //bewerkingen op "/users"
  //haal de lijst van alle gebruikers op
  lijstGebruikers = () => {
    this.apiServiceApp.getUsers().subscribe((data: Gebruiker[]) => {
      console.log(data);   
      this.gebruikers = data;
      })
  }
  //voeg een gebruiker toe
  toevoegenGebruiker = () => {
    this.apiServiceApp.addUser(this.naamToevoegen).subscribe((data) => {
      console.log(data);
      if(data.error == null)
        this.messageGebruikerToevoegen = data.success;
      else
        this.messageGebruikerToevoegen = data.error;
    });
    this.lijstGebruikers();
    this.naamToevoegen = "";
  }
  //verwijder een gebruiker
  verwijderenGebruiker = () => {
    this.apiServiceApp.deleteUser(this.naamVerwijderen).subscribe((data) => {
        console.log(data);
        if(data.error == null)
          this.messageGebruikerVerwijderen = data.success;
        else
          this.messageGebruikerVerwijderen = data.error;
    });
    this.lijstGebruikers();
    this.naamVerwijderen = "";
  }

  //bewerkingen op "/Notes"
  //haal de lijst van alle notities op
  lijstNotities = () => {
    this.apiServiceApp.getNotes().subscribe((data: Notitie[]) => {
         console.log(data);
        this.notities = data;
      })
  }
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  //lijstNotitiesVanGebruikerMetQueryOpNotes = () => {
    //this.apiServiceApp.getNotesFromUser(this.naamNotitieTonen).subscribe((data: Notitie[]) => {
      //console.log(data);
     //this.notitiesGebruikerMetQueryOpNotes = data;
    //});
    //this.naamNotitieTonen = "";
  //}
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  lijstNotitiesVanGebruiker = () => {
    this.apiServiceApp.getNotesFromUser(this.naamNotitieTonen).subscribe((data: Notitie[]) => {
      console.log(data);
     this.notitiesGebruiker = data;
    });
    this.naamNotitieTonen = "";
  }
  //voeg een notitie toe een bepaalde gebruiker
  toevoegenNotitieVoorGebruiker = () => {
    this.apiServiceApp.addNoteForUser(this.naamNotitieToevoegen, this.notitieToevoegen).subscribe((data) => {
      console.log(data);
    });
    this.naamNotitieToevoegen = "";
    this.notitieToevoegen = "";
  }
}