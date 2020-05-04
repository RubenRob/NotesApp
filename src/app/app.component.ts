import { Component, OnInit } from '@angular/core';
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
  userId: Number;
  noteCategoryId: Number;
}
interface Category
{
  id: Number;
  description: String;
  userId: Number;
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
  actieveGebruiker = "Gina";

  nieuweGebruiker: string; //naam van een nieuw toe te voegen gebruiker
  gebruiker: string;

  messageGebruikerToevoegen;
  messageGebruikerBestaat;
  messageGebruikerVerwijderen;

  gebruikers: Gebruiker[] = [];
  notities: Notitie[] = [];
  notitiesGebruiker: Notitie[] = [];
  notitiesGebruikerMetQueryOpNotes: Notitie[] = [];
  categorien: Category[] =  [];

  naamToevoegen;
  naamOpzoeken;
  naamVerwijderen;
  zoekString = "Marc";

  naamNotitieToevoegen;
  naamNotitieTonen;
  inhoudNotitieToevoegen;  
  categorieNotitieToevoegen;
  
  gevondenNotities: Notitie[] = [];
  gevondenNotitiesFilter: Notitie[] = [];
  categorienVanGebruiker: Category[] = [];
  omschrijvingCategorieToevoegen;
  naamCategorieToevoegen;
  filterCategorie="prive";

  constructor(apiService: APIService)
  {
    this.apiServiceApp = apiService;
    //this.vulDatabaseMetMockData();
  }  
  
  ngOnInit(): void {
  }

  //
  //bewerkingen op "/users"
  //
  
  //haal de lijst van alle gebruikers op
  lijstGebruikers = () => {
    this.apiServiceApp.getUsers().subscribe((data: Gebruiker[]) => {
      console.log(data);   
      this.gebruikers = data;
      })
  }
  //voeg een gebruiker toe
  toevoegenGebruiker = () => {
    this.apiServiceApp.addUser(this.nieuweGebruiker).subscribe((data) => {
      console.log(data);
      if(data.error == null)
        this.messageGebruikerToevoegen = data.success;
      else
        this.messageGebruikerToevoegen = data.error;
    });
    this.nieuweGebruiker = "";
  }
  //checkt of een gebruiker reeds bestaat
  bestaatGebruiker = () =>{
    this.apiServiceApp.getUser(this.gebruiker).subscribe((data) => {
      console.log(data);
      if(data.error == null)
        this.messageGebruikerBestaat = data.success;
      else
        this.messageGebruikerBestaat = data.error;
    });    
    this.gebruiker = "";
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

  //
  //bewerkingen op "/notescategory"
  //

  //haal de lijst van alle categorien op
  lijstCategorie = () =>{
    this.apiServiceApp.getCategories().subscribe((data: Category[]) => {
      console.log(data);
      this.categorien = data;
    })
  }
  //haal de lijst van alle categorien op
  lijstCategorienVanGebruiker = () =>{
    this.apiServiceApp.getCategoriesFromUser(this.actieveGebruiker).subscribe((data: Category[]) => {
      console.log(data);
      this.categorienVanGebruiker = data;
    })
  }
  //voeg een categorie toe
  toevoegenCategorie = () =>{
    this.apiServiceApp.addCategory(this.naamCategorieToevoegen, this.omschrijvingCategorieToevoegen).subscribe((data) => {
      console.log(data);
      if(data.error == null)
        this.messageGebruikerBestaat = data.success;
      else
        this.messageGebruikerBestaat = data.error;
    });    
  }

  //
  //bewerkingen op "/Notes"
  //

  //haal de lijst van alle notities op
  lijstNotities = () => {
    this.apiServiceApp.getNotes().subscribe((data: Notitie[]) => {
         console.log(data);
        this.notities = data;
      })
  }
  //haal de lijst van alle notities op voor een bepaalde gebruiker
  lijstNotitiesVanGebruiker = () => {
    this.notitiesVanGebruikerFilterenOpCategorie();
    //this.apiServiceApp.getNotesFromUser(this.actieveGebruiker).subscribe((data: Notitie[]) => {
     // console.log(data);
     //this.notitiesGebruiker = data;
    //});
    this.naamNotitieTonen = "";
  }
  //voeg een notitie toe een bepaalde gebruiker
  toevoegenNotitieVoorGebruiker = () => {
    this.apiServiceApp.addNoteForUser(this.naamNotitieToevoegen, this.inhoudNotitieToevoegen,this.categorieNotitieToevoegen).subscribe((data) => {
      console.log(data);
    });
    this.naamNotitieToevoegen = "";
    this.inhoudNotitieToevoegen = "";
    this.categorieNotitieToevoegen = "";
  }
  notitiesVanGebruikerDieZoekStringBevatten() {
    this.notitiesVanGebruikerFilterenOpCategorie();
    // this.apiServiceApp.getNotesWithSubstringFromUser(this.actieveGebruiker, this.zoekString).subscribe((data: Notitie[]) => {
    //   console.log(data);
    //  this.gevondenNotities = data;
    // });
    this.zoekString = "";
  }
  notitiesVanGebruikerFilterenOpCategorie() {
    this.apiServiceApp.getNotesWithSubstringFromUser(this.actieveGebruiker, this.zoekString, this.filterCategorie).subscribe((data: Notitie[]) => {
      console.log(data);
     this.gevondenNotitiesFilter = data;
    });
  }
  
  //nep data om de functies te controleren
  vulDatabaseMetMockData() {
    //gebruikers toevoegen
    this.apiServiceApp.addUser("Gina").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Chantal").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Sonja").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Thierry").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Karel").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Tim").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Marie").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Jonathan").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Ilse").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Isabel").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Peter").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("David").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Geert").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addUser("Tom").subscribe((data) => {
      console.log(data);})

    //categorien toevoegen
    this.apiServiceApp.addCategory("Gina", "prive").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addCategory("Gina", "dringend").subscribe((data) => {
      console.log(data);})
      //notities toevoegen
    this.apiServiceApp.addNoteForUser("Gina", "bureau kuisen","dringend").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addNoteForUser("Gina", "facebook checken","prive").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addNoteForUser("Gina", "boodschappen doen","prive").subscribe((data) => {
      console.log(data);})  
      
    //categorien toevoegen
    this.apiServiceApp.addCategory("Chantal", "prive").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addCategory("Chantal", "dringend").subscribe((data) => {
      console.log(data);})
    //notities toevoegen
    this.apiServiceApp.addNoteForUser("Chantal", "bureau kuisen","dringend").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addNoteForUser("Chantal", "facebook checken","prive").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addNoteForUser("Chantal", "dochter bellen","prive").subscribe((data) => {
      console.log(data);})
      
    //categorien toevoegen
    this.apiServiceApp.addCategory("Sonja", "dringend").subscribe((data) => {
      console.log(data);})
    //notities toevoegen
  this.apiServiceApp.addNoteForUser("Sonja", "facturen bezorgen","dringend").subscribe((data) => {
    console.log(data);})
    
    //categorien toevoegen
    this.apiServiceApp.addCategory("Karel", "prive").subscribe((data) => {
      console.log(data);})
    //notities toevoegen
    this.apiServiceApp.addNoteForUser("Karel", "personeel beoordelen","prive").subscribe((data) => {
      console.log(data);})
    this.apiServiceApp.addNoteForUser("Karel", "avondje uit","prive").subscribe((data) => {
      console.log(data);})
    
    //categorien toevoegen
    this.apiServiceApp.addCategory("Marie", "dringend").subscribe((data) => {
      console.log(data);})
    //notities toevoegen
    this.apiServiceApp.addNoteForUser("Marie", "les gaan volgen","dringend").subscribe((data) => {
      console.log(data);})
    
    //categorien toevoegen
    this.apiServiceApp.addCategory("Tom", "prive").subscribe((data) => {
      console.log(data);})
    //notities toevoegen
    this.apiServiceApp.addNoteForUser("Tom", "vrouw bellen","prive").subscribe((data) => {
      console.log(data);})
    
    //categorien toevoegen
    this.apiServiceApp.addCategory("Ilse", "dringend").subscribe((data) => {
      console.log(data);})
    //notities toevoegen
    this.apiServiceApp.addNoteForUser("Ilse", "infobrochure verspreiden","dringend").subscribe((data) => {
      console.log(data);})
  }
}