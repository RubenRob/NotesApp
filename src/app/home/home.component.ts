import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { APIService } from '../api.service';

interface User {
  id: number;
  name: string;
}
interface Note {
  id: number;
  content: string;
  userId: number;
  categoryId: number;
}
interface Category {
  id: number;
  description: string;
  userId: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private apiService: APIService;
    
    //ingelogde gebruiker

    loginUser: User;
    loginUserId;
    toevoegenNotitie= true;
    selectednotitieCategorie="-1";
    //lijst van gebruikers
    users: User[] = [];
    //lijst van categoriën
    categories: Category[] = [];
    //lijst van notities
    notesOfUserWithCategoryFilter: Note[] = [];

  constructor(ApiService: APIService) {
    this.apiService = ApiService;
  } 
  message0: string = "Welkom bij notesApp";
  message1: string = "Geef uw gebruikersnaam in om in te loggen.";
  message2: string = "Nieuwe gebruiker?  Maak een account aan.";
  loginUserName: string = "Gina";

  ngOnInit() {
  }
  
  //userExists is false wanneer loginUserName niet gekend is
  userExists: boolean = false;
  //gebruiker met naam loginUserName, diens categoriën en notities
  activeUser: User;
  categoriesOfUser: Category[] = [];
  notesOfUser: Note[] = [];
  //lijst van weer te geven notities
  notes: Note[] = [];

  //controleer of de ingegeven naam bestaat en ga de gegevens van die gebruiker ophalen  
  getUser() {
    this.apiService.getUser(this.loginUserName).subscribe((data: User) => {
      console.log(data);
      this.loginUser= data;
      if(this.loginUser.name === undefined) {
        this.userExists= false;
        this.message1= "Gebruiker " + this.loginUserName + " is niet gekend!  Probeer opnieuw of maak een account aan.";
        return;
      }
        else {
          this.userExists= true;
          this.message0= "Welkom " + this.loginUser.name;
        }
      this.apiService.getCategoriesOfUser(this.loginUser.id).subscribe((data: Category[]) => {
        console.log(data);
        this.categoriesOfUser = data;
      })
      this.apiService.getNotesOfUser(this.loginUser.id).subscribe((data: Note[]) => {
        console.log(data);
        //notesOfUser is de lijst met alle notities van de gebruiker
        this.notesOfUser = data;
        //notes is de lijst met weer te geven notities
        this.notes=data;
      })
    })
  }
  
  //velden voor de nieuwe account weergeven
  addAccountClicked: boolean = false;
  newUserName: string = "";
  addAccount(){
    this.addAccountClicked = true;
    this.newUserName = this.loginUserName;
  }
  //gebruiker toevoegen
  addUser() {
    this.loginUserName="";
    this.apiService.addUser(this.newUserName).subscribe((data) => {
      console.log(data);
      //zonder fout is de gebruiker geregistreerd
      if(data.error == null) {
        this.message1 = "U bent geregistreerd, geef uw gebruikersnaam in om in te loggen.";
        this.addAccountClicked = false;
        this.message2 = "Nieuwe gebruiker?  Maak een account aan."
      }
      else {
        this.message2 = "Deze loginnaam bestaat al, gelieve een andere te kiezen."
      }
    })
  }

  //eenmaal ingelogd
  //lijst notities tonen, maar die hebben we al

  onItemClick(noteId)
  {
    console.log(noteId);
  }


//uit te kuisen code
  inloggen(){
    //gebruiker ophalen
    this.apiService.getUser(this.loginUserName).subscribe((data: User) => {
      console.log(data);
      this.loginUser= data;
      if(this.loginUser.name === undefined) {
        this.userExists= false;
        this.message1= "Gebruiker " + this.loginUserName + " is niet gekend!";
        return;
      }
        else {
          this.userExists= true;
          this.message2= "Welkom " + this.loginUser.name;
        }
    this.apiService.getCategoriesOfUser(this.loginUser.id).subscribe((data: Category[]) => {
      console.log(data);
      this.categoriesOfUser = data;
    })
    this.apiService.getNotesOfUser(this.loginUser.id).subscribe((data: Note[]) => {
      console.log(data);
      this.notesOfUser = data;
      this.notes=data;
    })
})
}
nieuweGebruiker() {
  alert("aanmelden");
}
  
  categoryFilter="-1";
  filterAan=false;
  notesMetCategorieFilter: Note[]=[];
  filterCategory(event){
    this.categoryFilter= event.target.value;
  }
  selectedFilterCategorie: string = "-1";
showAllNotes(){
  this.notes= this.notesOfUser;
  this.filterAan=false;
  this.selectedFilterCategorie = "-1";
}
  filterCategoryToepassen(){
      if(this.filterAan) {
        this.notes= this.notesOfUser;
      }
      if(this.categoryFilter == "-1") {
        this.filterAan=false;
        return;
      }
      this.notes.forEach(note => {
        if(note.categoryId == Number(this.categoryFilter)) {
          this.notesMetCategorieFilter.push(note);
        }
      });
      this.notes=this.notesMetCategorieFilter;
      this.filterAan=true;
      this.notesMetCategorieFilter=[];
  }
  content="";
  categorieNotitie="-1";
  Notitiecategory(event){
    this.categorieNotitie= event.target.value;
  }
  NotitieToevoegen(){
    if(this.categorieNotitie == "-1") {
      alert("U koos geen categorie");
      return;
    }
    this.apiService.addNoteForUser(this.loginUser.id, this.categorieNotitie, this.content + "(catId: " + this.categorieNotitie + ")").subscribe((data) => {
      console.log(data);
      this.apiService.getNotesOfUser(this.loginUser.id).subscribe((notes: Note[]) => {
        console.log(notes);
        this.notesOfUser = notes;
      })
    })
    }

    substring="";
    notesMetSubstring: Note[]=[];
    NotitiesMetZoekstringZoeken() {
      this.notes.forEach(note => {
        if(note.content.includes(this.substring)) {
          this.notesMetSubstring.push(note);
        }
      });
      this.notes=this.notesMetSubstring;
      this.substring="";
      this.notesMetSubstring=[];
    }
    noteToUpdateId;
    NotitieBewerken(note) {
      //naam en functie button wijzigen
      this.toevoegenNotitie=false;
      //velden content en categorie invullen op basis van de bestaande notitie
      this.content=note.content;
      this.selectednotitieCategorie= note.categoryId;
      //id van de notitie, want die hebben we nodig om in de DB aanpassingen te kunnen doen
      this.noteToUpdateId = note.id;
    }
    NotitieWijzigen() {
      this.apiService.updateNoteOfUser(this.noteToUpdateId,this.selectednotitieCategorie,this.content).subscribe((data) => {
      console.log(data);
      this.apiService.getNotesOfUser(this.loginUser.id).subscribe((notes: Note[]) => {
        console.log(notes);
        this.notesOfUser = notes;
      })
    })
    }
    NotitieVerwijderen(noteId) {
      this.apiService.getNotesOfUser(this.loginUser.id).subscribe((data: Note[]) => {
        console.log(data);
        this.apiService.delNoteOfUser(noteId).subscribe((data) => {
          console.log(data);
        })
        this.notesOfUser = data;
      })
    }

//moeten van invoervelden komen:
addUser_userName = "Tina";
addCategoriesForUser_description= "test1";
deleteCategorie_idOfUser: number = 10;
addCategorie_idOfUser:number = 1;
contentNieuweNotitie:string = "nieuwe notitie van Gina met cat 6"
  //apiservice
    //gebruikers ophalen
  getUsers() {
    this.apiService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    })
  }
  //gebruiker verwijderen
  delUser() {
    this.apiService.delUser(this.loginUserId).subscribe((data) => {
      console.log(data);
    })
  }

  //categoriën
  //catergoriën ophalen
  getCategories() {
    this.apiService.getCategories().subscribe((data: Category[]) => {
      console.log(data);
      this.categories = data;
    })
  }
  //categoriën van de actieve gebruiker ophalen
  getCategoriesOfUser(userId) {
    this.apiService.getCategoriesOfUser(userId).subscribe((data: Category[]) => {
      console.log(data);
      this.categoriesOfUser = data;
    })
  }
  //categorie voor de actieve gebruiker toevoegen
  addCategoriesForUser() {
    this.apiService.addCategoriesForUser(this.loginUserId, this.addCategoriesForUser_description).subscribe((data) => {
      console.log(data);
    })
  }
  //categoriën van de actieve gebruiker verwijderen en dus ook de bijhorende notities
  deleteCategoriesOfUser(){
    this.apiService.delCategoriesOfUser(this.deleteCategorie_idOfUser).subscribe((data) => {
      console.log(data);
    })
  }
  //notities
  getNotes() {
    this.apiService.getNotes().subscribe((data: Note[]) => {
      console.log(data);
      this.notes = data;
    })
  }
  getNotesOfUser(userId) {
    this.apiService.getNotesOfUser(userId).subscribe((data: Note[]) => {
      console.log(data);
      this.notesOfUser = data;
    })
  }
  addNoteForUser(userId, categoryId, content) {
    this.apiService.addNoteForUser(userId, categoryId,content).subscribe((data) => {
      console.log(data);
    })
  }
    //opgekuisd


  // onChangeCategory(description: string, isChecked: boolean) {
  //   const categories = (this.formCategory.controls.description as FormArray);

  //   if (isChecked) {
  //     categories.push(new FormControl(description));
  //   } 
  //   else {
  //     const index = categories.controls.findIndex(x => x.value === description);
  //     categories.removeAt(index);
  //   }
  // }
  
  // onChangeNote(content: string, isChecked: boolean) {
  //   const notes = (this.formNote.controls.content as FormArray);

  //   if (isChecked) {
  //     notes.push(new FormControl(content));
  //   } 
  //   else {
  //     const index = notes.controls.findIndex(x => x.value === content);
  //     notes.removeAt(index);
  //   }
  // }


  // submitCategory() {
  //   this.notesNaFilter=[];
  //   this.filters = this.formCategory.value.description;
  //   this.filters.forEach((filter) => {
  //     this.OphalenNotitie(filter);
  //     console.log(this.formCategory.value.description);
  //   });
  // }
  // submitNote() {
  //   console.log(this.formNote.value.content);
  // }
}
