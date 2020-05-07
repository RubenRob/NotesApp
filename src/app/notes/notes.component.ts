import { Component, OnInit, Input } from '@angular/core';
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

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() loginUser: User;

  activeUser: User;
 
  private apiService: APIService;
  notes: Note[] = [];
  constructor(ApiService: APIService) {
    this.apiService = ApiService;
  } 

  ngOnInit() {    
    this.activeUser= this.loginUser;
    this.notitieshalen();
  }
  notitieshalen(){

  this.apiService.getNotesOfUser(this.loginUser.id).subscribe((data: Note[]) => {
    console.log(data);
    this.notes=data;
  })
}

}
