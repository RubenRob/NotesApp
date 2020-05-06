import { Component, OnInit, Input } from '@angular/core';
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
  noteCategoryId: number;
}
interface Category {
  id: number;
  description: string;
  userId: number;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  private apiService: APIService;
  //ingelogde gebruiker
  @Input() loginUser;

    loginUserId=15;//this.userUserComponent.id;
    loginUserName ="Tom";//this.loginUser.name;
    validUser: boolean = false;
    message;
    //moeten van invoervelden komen:
    addUser_userName = "Tina";
    addCategoriesForUser_description= "test1";
    deleteCategorie_idOfUser: number = 10;
    addCategorie_idOfUser:number = 1;
    contentNieuweNotitie:string = "nieuwe notitie van Gina met cat 6"
    //opkuisen

    //lijst van gebruikers
    users: User[] = [];
    //lijst van categoriën
    categories: Category[] = [];
    categoriesOfUser: Category[] = [];
    //lijst van notities
    notes: Note[] = [];
    notesOfUser: Note[] = [];

  constructor(ApiService: APIService, private formBuilder: FormBuilder) {
    this.apiService = ApiService;
  } 

  filterCategory(event){
    alert(event);
  }
  filterCategoryToepassen(){
    alert("toepassen");
  }

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
  getNotesOfUser() {
    this.apiService.getNotesOfUser(this.loginUserId).subscribe((data: Note[]) => {
      console.log(data);
      this.notesOfUser = data;
    })
  }
  addNoteForUser() {
    this.apiService.addNoteForUser(this.loginUserId, this.addCategorie_idOfUser,this.contentNieuweNotitie).subscribe((data) => {
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

