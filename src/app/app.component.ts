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
  naamNotitieTonen;
  notities: Notitie[] = [];
  notitiesGebruiker: Notitie[] = [];
  notitieToevoegen;

  constructor(apiService: APIService)
  {
    this.apiServiceApp = apiService;
    this.lijstGebruikers();
  }  
  
  //lijst met gebruikers weergeven
  lijstGebruikers = () => {
    this.apiServiceApp.getUsers().subscribe((data: Gebruiker[]) => {
      console.log(data);   
      this.gebruikers = data;
      })
  }
  //lijst met alle notities van weergeven
  lijstNotities = () => {
    this.apiServiceApp.getNotes().subscribe((data: Notitie[]) => {
         console.log(data);
        this.notities = data;
      })
  }
  //lijst met notities van een gebruiker weergeven
  lijstNotitiesVanGebruiker = () => {
    this.apiServiceApp.getUserNotes(this.naamNotitieTonen).subscribe((data: Notitie[]) => {
      console.log(data);
     this.notitiesGebruiker = data;
    });
    this.naamNotitieTonen = "";
  }
  //een gebruiker toevoegen
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
  //een notitie voor een bepaalde gebruiker toevoegen
  toevoegenNotitieVoorGebruiker = () => {
    this.apiServiceApp.addUserNote(this.naamNotitieToevoegen, this.notitieToevoegen).subscribe((data) => {
      console.log(data);
    });
    this.naamNotitieToevoegen = "";
    this.notitieToevoegen = "";
  }
  //een gebruiker verwijderen
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
}