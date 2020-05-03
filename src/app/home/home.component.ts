import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { APIService } from '../api.service';

interface User {
  id: Number;
  name: string;
}
interface Note {
  id: Number;
  content: string;
  userId: Number;
  categoryId: Number;
}
interface Category {
  id: Number;
  description: string;
  userId: Number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private apiService: APIService;
    
    //lijst van users in de db
    users: User[] = [];
    //lijst van notities voor user al dan niet met filter
    notes: Note[] = [];
    notesFilter: Note[] = [];
    notesNaFilter: string[] = [];
    //lijst van notities voor user al dan niet met filter
    categories: Category[] = [];
    geenFilterSelectie=true;
    //ingelogde user
    activeUser = "Gina";
    
    formCategory: FormGroup;
    filters=[];
    formNote: FormGroup;

  constructor(ApiService: APIService, private formBuilder: FormBuilder) {
    this.apiService = ApiService;
  } 
    
  onChangeCategory(description: string, isChecked: boolean) {
    const categories = (this.formCategory.controls.description as FormArray);

    if (isChecked) {
      categories.push(new FormControl(description));
    } 
    else {
      const index = categories.controls.findIndex(x => x.value === description);
      categories.removeAt(index);
    }
  }
  
  onChangeNote(content: string, isChecked: boolean) {
    const notes = (this.formNote.controls.content as FormArray);

    if (isChecked) {
      notes.push(new FormControl(content));
    } 
    else {
      const index = notes.controls.findIndex(x => x.value === content);
      notes.removeAt(index);
    }
  }

  ngOnInit() {
    this.OphalenCategorien();
    this.OphalenNotities();
    //Catergorie
    this.formCategory = this.formBuilder.group({
      description: this.formBuilder.array([])
    });
    //Notities
    this.formNote = this.formBuilder.group({
      content: this.formBuilder.array([])
    });
  }

  submitCategory() {
    this.notesNaFilter=[];
    this.filters = this.formCategory.value.description;
    this.filters.forEach((filter) => {
      alert("ophalen filter");
      this.OphalenNotitie(filter);
      alert("notities zijn opgehaald");
      this.notesFilter.forEach((note) => {
        alert("notesFilter aan 't doorlopen");
        this.notesNaFilter.push(note.content);
        alert("notesNaFilter gevuld");
      });
    });
    console.log(this.formCategory.value.description);
  }
  submitNote() {
    console.log(this.formNote.value.content);
  }

  OphalenCategorien() {
    this.apiService.getCategoriesFromUser(this.activeUser).subscribe((data: Category[]) => {
      console.log(data);   
      this.categories = data;
      })
    }
    OphalenNotities() {
      this.apiService.getNotesFromUser(this.activeUser,"","").subscribe((data: Note[]) => {
        console.log(data);   
        this.notes = data;
        })
    }
    OphalenNotitie(filter) {      
      alert("OphalenNotitie");
      this.apiService.getNotesFromUser(this.activeUser,"",filter).subscribe((data: Note[]) => {  
        alert("apiService bezocht");
        console.log(data);   
        this.notesFilter = data;  
        alert("notesFilter gevuld");
        })
      }
  }