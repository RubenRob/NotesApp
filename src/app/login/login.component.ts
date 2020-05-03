import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
//<!--
//
//
//hieronder code om de dbconnectie te testen
//
//
//-->
interface Gebruiker
{
  id: Number;
  name: String;
}
//<!--
//
//
//hierboven code om de dbconnectie te testen
//
//
//-->

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private apiServiceApp;
  geldigeGebruiker = "";
  gebruikersnaam = "Tom";
  
  constructor(private apiService: APIService, private router: Router) {
    this.apiServiceApp = apiService; }

  ngOnInit(): void {
  }

  //checkt of een gebruiker reeds bestaat
  IsGeldigeGebruiker () {
    this.apiServiceApp.getUser(this.gebruikersnaam).subscribe((data) => {
      alert("log");
      console.log(data);
      if(data.error == null){
        alert("if");
        this.geldigeGebruiker  = data.success;
      }
      else{
        alert("else");
        this.geldigeGebruiker  = data.error;
      }
      alert(this.geldigeGebruiker);
    });   
    alert("we zijn hier");
  }
  Inloggen(geldigeGebruiker) {
    
    if(geldigeGebruiker) {
      alert("we zijn er");
      this.router.navigate(["/home"]);
    }
    else {
      //boodschap dat de gebruiker niet bestaat
      alert(this.gebruikersnaam + "is niet gekend");
    }
  }
  
//<!--
//
//
//hieronder code om de dbconnectie te testen
//
//
//-->
  gebruikers : Gebruiker[] = [];
  lijstGebruikers = () => {
    this.apiServiceApp.getUsers().subscribe((data: Gebruiker[]) => {
      console.log(data);   
      this.gebruikers = data;
      })
  }

}
