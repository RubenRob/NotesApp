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
    activeUserNames = "Gina";


    loginUser: User;
    loginUserName= this.activeUserNames;
    loginUserId;
    validUser: boolean = false;
    message;
    toevoegenNotitie= true;
    selectednotitieCategorie="-1";
    //lijst van gebruikers
    users: User[] = [];
    //lijst van categoriën
    categories: Category[] = [];
    categoriesOfUser: Category[] = [];
    //lijst van notities
    notesOfUser: Note[] = [];
    notes: Note[] = [];
    notesOfUserWithCategoryFilter: Note[] = [];

  constructor(ApiService: APIService) {
    this.apiService = ApiService;
  } 

  inloggen(){
    //gebruiker ophalen
    this.apiService.getUser(this.loginUserName).subscribe((data: User) => {
      console.log(data);
      this.loginUser= data;
      if(this.loginUser.name === undefined) {
        this.validUser= false;
        this.message= "Gebruiker " + this.loginUserName + " is niet gekend!";
        return;
      }
        else {
          this.validUser= true;
          this.message= "Welkom " + this.loginUser.name +", met id "+ this.loginUser.id;
        }
  })
  this.apiService.getCategoriesOfUser(this.loginUser.id).subscribe((data: Category[]) => {
    console.log(data);
    this.categoriesOfUser = data;
  })
  this.apiService.getNotesOfUser(this.loginUser.id).subscribe((data: Note[]) => {
    console.log(data);
    this.notesOfUser = data;
    this.notes=data;
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
      this.apiService.getNotesOfUser(this.loginUser.id).subscribe((data: Note[]) => {
        console.log(data);
        this.apiService.addNoteForUser(this.loginUser.id, this.categorieNotitie, this.content).subscribe((data) => {
          console.log(data);
        })
        this.notesOfUser = data;
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
    NotitieBewerken(note) {
      this.toevoegenNotitie=false;
      this.content=note.content;
      this.selectednotitieCategorie= note.categoryId;
    }
    NotitieWijzigen() {
      alert(this.categorieNotitie);
      this.toevoegenNotitie=true;
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
  getUser(userName) {
    this.apiService.getUser(userName).subscribe((data: User) => {
      console.log(data);
      this.loginUser= data;
      // this.loginUserId = data.id;
      // this.loginUserName = data.name;
    });
  }
  //gebruiker toevoegen
  addUser() {
    this.apiService.addUser(this.addUser_userName).subscribe((data) => {
      console.log(data);
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

    ngOnInit() {
      // this.getUser();
      // this.getCategories();
      // this.getNotes();
      // //Catergorie
      // this.formCategory = this.formBuilder.group({
      //   description: this.formBuilder.array([])
      // });
      // //Notities
      // this.formNote = this.formBuilder.group({
      //   content: this.formBuilder.array([])
      // });
    }


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
