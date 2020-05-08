import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { APIService } from '../api.service';
import { ColorFormats } from 'ngx-color-picker/lib/formats';

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
  color: string;
  userId: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private apiService: APIService;
    
  constructor(ApiService: APIService) {
    this.apiService = ApiService;
  } 

  ngOnInit() {
  }

  //info strartscherm
  message0: string = "Welkom bij notesApp";
  message1: string = "Geef uw gebruikersnaam in om in te loggen.";
  message2: string = "Nieuwe gebruiker?  Maak een account aan.";
  message3: string = "Geef hier de naam van uw categorie in";
  message4: string = "In welke kleur wilt u de categorie weergeven";
  message5: string = "Vul hier uw notitie in";
  message6: string = "Kies uw notitiecategorie";
  loginUserName: string = "Emiel";
  //userExists is false wanneer loginUserName niet gekend is
  userExists: boolean = false;
  //gebruiker met naam loginUserName
  activeUser: User;
  //categoriën van gebruiker
  categoriesOfUser: Category[] = [];
  //categoryListEmpty: boolean = true;
  //geselecteerde categorie staat standaard op -1: --- kies een categorie ---
  selectedFilterCategoryFilter: number = -1;
  //geselecteerde categorie staat standaard op -1: --- kies een categorie ---
  selectedNotesCategory: number = -1;
  //kleurlijst weergave categoriën
  categoryColor;
  //notities van gebruiker
  notesOfUser: Note[] = [];
  //lijst van weer te geven notities
  notes: Note[] = [];

  //controleer of de ingegeven naam bestaat en ga de gegevens van die gebruiker ophalen  
  getUser() {
    this.apiService.getUser(this.loginUserName).subscribe((data: User) => {
      console.log(data);
      this.activeUser= data;
      if(this.activeUser.name === undefined) {
        this.userExists= false;
        this.message1= "Gebruiker " + this.loginUserName + " is niet gekend!  Probeer opnieuw of maak een account aan.";
        return;
      }
        else {
          this.userExists= true;
          this.message0= "Welkom " + this.activeUser.name;
          this.loginUserName="";
        }
      this.apiService.getCategoriesOfUser(this.activeUser.id).subscribe((data: Category[]) => {
        console.log(data);
        this.categoriesOfUser = data;
        if(data.length == 0) {
          //this.categoryListEmpty = true;
          this.message2 = "U moet eerst een categorie aanmaken om een nieuwe notitie te kunnen toevoegen.";
        }
        else{
          //this.categoryListEmpty = false;
          this.message2 = "";
        }
      })
      this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data: Note[]) => {
        console.log(data);
        //notesOfUser is de lijst met alle notities van de gebruiker
        this.notesOfUser = data;
        //notes is de lijst met weer te geven notities
        this.notes=data;
        if(data.length == 0) {
          this.message1 = "U heeft nog geen notities om weer te geven.";
        }
        else{
          //this.categoryListEmpty = false;
          this.message1 = "";
        }
      })
    })
  }
  
  //velden voor de nieuwe account weergeven
  addUserClicked: boolean = false;
  newUserName: string = "";
  addUserShowInputField(){
    this.addUserClicked = true;
    this.newUserName = this.loginUserName;
    this.loginUserName = "";
  }
  //gebruiker toevoegen
  addUser() {
    this.loginUserName="";
    this.apiService.addUser(this.newUserName).subscribe((error) => {
      console.log(error);
      //zonder fout is de gebruiker geregistreerd
      if(error != "User already exists") {
        this.message1 = "U bent geregistreerd, geef uw gebruikersnaam in om in te loggen.";
        this.loginUserName=this.newUserName;
        this.addUserClicked = false;
        this.message2 = "Nieuwe gebruiker?  Maak een account aan."
      }
      else {
        this.message2 = "Deze loginnaam bestaat al, gelieve een andere te kiezen."
      }
    })
  }
  logOff(){
    this.message0 = "Welkom bij notesApp";
    this.message1 = "Geef uw gebruikersnaam in om in te loggen.";
    this.message2 = "Nieuwe gebruiker?  Maak een account aan.";
    this.activeUser = null;
    this.categoriesOfUser = [];
    this.notesOfUser = [];
    this.notes = [];
    this.userExists = false;
  }
  deleteUser(){
    this.apiService.delUser(this.activeUser.id).subscribe((data) => {
      console.log(data);
    })
    this.message0 = "Welkom bij notesApp";
    this.message1 = "Geef uw gebruikersnaam in om in te loggen.";
    this.message2 = "Nieuwe gebruiker?  Maak een account aan.";
    this.activeUser = null;
    this.categoriesOfUser = [];
    this.notesOfUser = [];
    this.notes = [];
    this.userExists = false;
  }

  //eenmaal ingelogd
  //velden voor de nieuwe categorie weergeven
  addcategoryClicked: boolean = false;
  categoryDescriptionNew: string = "";
  setAddCategoryClicked(value) {
    this.addcategoryClicked = value;
  }  
  //geselecteerde filter ophalen
  noteCategory(event){
    this.selectedNotesCategory= event.target.value;
  }
  addCategory() {
    if(this.categoryColor==undefined){
      this.message4="U moet een kleur selecteren";
      return;
    }
    if(this.categoryDescriptionNew==""){
      this.message3="U heeft geen categorie ingegeven";
      return;
    }
    this.apiService.addCategoryForUser(this.activeUser.id, this.categoryDescriptionNew,this.categoryColor).subscribe((data) => {
      console.log(data);
      this.apiService.getCategoriesOfUser(this.activeUser.id).subscribe((data: Category[]) => {
        console.log(data);
        this.categoriesOfUser = data;
        //als alles goed ging is de lijst nu niet meer leeg
        if(data.length == 0) {
          //this.categoryListEmpty = true;
          this.selectedNotesCategory = 1;
          this.message1 = "U heeft nog geen notities om weer te geven.";
          this.message2 = "U moet eerst een categorie aanmaken om een nieuwe notitie te kunnen toevoegen.";
        }
        else{
          //this.categoryListEmpty = false;
          this.message2 = "";
          this.setAddCategoryClicked(false);
          this.categoryDescriptionNew = "";
        }
      })
    })
  }
  //haal de kleur van de categorie op
  colorCategorie: string = "";
  getColor(note): string {      
    this.categoriesOfUser.forEach(category => {
      if(category.id == note.categoryId) {
      this.colorCategorie = category.color;
      }
    });
    return this.colorCategorie;
  }
  
  //velden voor de nieuwe notitie weergeven
  addNoteClicked: boolean = false;
  noteContent: string = "";
  setAddNoteClicked(value) {
    this.addNoteClicked = value;
  }
  addNote() {
    if(this.selectedNotesCategory == -1) {
      this.message6 = "U moet een categorie selecteren";
      return;
    }
    if(this.noteContent == "") {
      this.message5 ="Uw heeft geen notitie ingegeven";
      return;
    }
    this.apiService.addNoteForUser(this.activeUser.id, this.selectedNotesCategory, this.noteContent).subscribe((data) => {
      console.log(data);
      this.selectedNotesCategory = -1;
      this.noteContent = "";
      this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data: Note[]) => {
        console.log(data);
        //notesOfUser is de lijst met alle notities van de gebruiker
        this.notesOfUser = data;
        //notes is de lijst met weer te geven notities
        this.notes=data;
        if(data.length == 0) {
          this.message1 = "U heeft nog geen notities om weer te geven.";
        }
        else{
          this.setAddNoteClicked(false);
          this.message1 = "";
        }
      })
    })
    }
    //geselecteerde notitie om te bewerken of te verwijderen
    messageSelectedNote: string = "deze notitie kan worden bewerkt of verwijderd"
    selectedNote: Note;
    changeNoteClicked: boolean = false;
    setChangeNoteClicked(value) {
      console.log("changeNote:" + this.selectedNote.content + " " + this.selectedNote.categoryId);
      this.noteContent = this.selectedNote.content
      this.selectedNotesCategory = this.selectedNote.categoryId
      this.addNoteClicked = value;
      this.changeNoteClicked = value;
    }
    onNoteClick(note) {
      this.selectedNote = note;
      console.log(this.selectedNote.id);
    }
    changeNote(){      
      if(this.selectedNotesCategory == -1) {
        this.message6 = "U moet een categorie selecteren";
        return;
      }
      if(this.noteContent == "") {
        this.message5 ="Uw heeft geen notitie ingegeven";
        return;
      }
      this.apiService.updateNoteOfUser(this.selectedNote.id, this.selectedNotesCategory, this.noteContent).subscribe((data) => {
        console.log(data);
        this.selectedNotesCategory = -1;
        this.noteContent = "";
        this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data: Note[]) => {
          console.log(data);
          //notesOfUser is de lijst met alle notities van de gebruiker
          this.notesOfUser = data;
          //notes is de lijst met weer te geven notities
          this.notes=data;
          if(data.length == 0) {
            this.message1 = "Oeps, hier ging iets mis.";
          }
          else{
            this.setAddNoteClicked(false);
            this.setChangeNoteClicked(false);
            this.message1 = "";
          }
        })
      })
    }

    deleteNote(){
      this.apiService.delNoteOfUser(this.selectedNote.id).subscribe((data) => {
        console.log(data);
        this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data: Note[]) => {
          console.log(data);
          //notesOfUser is de lijst met alle notities van de gebruiker
          this.notesOfUser = data;
          //notes is de lijst met weer te geven notities
          this.notes=data;
          if(data.length == 0) {
            this.message1 = "U heeft nog geen notities om weer te geven.";
          }
          else{
            this.setAddNoteClicked(false);
            this.message1 = "";
          }
        })
      })
    }
  

  //Filters wissen
  //lijst notities tonen
  showAllNotes(){
    this.notes= this.notesOfUser;
    this.filterOn=false;
    this.selectedFilterCategoryFilter = -1;
  }
  
  //Filter op categorie
  //geselecteerde filter ophalen
  filterCategory(event){
    this.selectedFilterCategoryFilter= event.target.value;
  }
  filterOn=false;
  filteredNotes: Note[]=[];
  filterNotes(){
    this.substring="";
    //if(this.selectedFilterCategoryFilter == -1) {
    //  this.filterOn=false;
    //  return;
    //}
    //if(this.filterOn) {
    //  this.notes= this.notesOfUser;
    //}
    this.notesOfUser.forEach(note => {
      if(note.categoryId == this.selectedFilterCategoryFilter) {
        this.filteredNotes.push(note);
      }
    });
    this.notes=this.filteredNotes;
    //this.filterOn=true;
    this.filteredNotes=[];
}

  //Filter op substring
  substring: string = "";
  notesWithSubstring: Note[]=[];
  searchNotesWithSubstring() {
    this.notes.forEach(note => {
      if(note.content.includes(this.substring)) {
        this.notesWithSubstring.push(note);
      }
    });
    this.notes=this.notesWithSubstring;
    //this.substring="";
    this.notesWithSubstring=[];
  }

  //voor een eventuele administrator
  //gebruikers
  getUsers() {
     this.apiService.getUsers().subscribe((data: User[]) => {
       console.log(data);
     })
   }

  //categoriën
  getCategories() {
    this.apiService.getCategories().subscribe((data: Category[]) => {
      console.log(data);
     })
    }
  //notities
  getNotes() {
    this.apiService.getNotes().subscribe((data: Note[]) => {
      console.log(data);
    })
  }
}
