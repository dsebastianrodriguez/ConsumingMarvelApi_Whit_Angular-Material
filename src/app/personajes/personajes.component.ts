import { Component, OnInit } from '@angular/core';
import { PersonajesApiService } from './personaje/shared/personajes-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajeService:PersonajesApiService, public route:ActivatedRoute) { }
  todosPersonajes: Observable<any>;
  personaje: Observable<any>;
  public page!:number;
  

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes(){

    this.todosPersonajes =this.personajeService.getAllPersonajes();
    /*this.personajeService.getAllPersonajes().subscribe(data=> {
      console.log(data);
      this.todosPersonajes=data
    } );*/
  }

  getPersonaje(id: number){
    this.personaje= this.personajeService.getpersonaje(id)
  }
  // getComics(id: number){
  //   this.personaje= this.personajeService.getComics(id)
    
  // }

  

  // getChar(idC: number){
  //   this.personajeService.getCharacter(idC).subscribe(data=>{
  //     console.log(data);
  //     console.log("Me estoy ejecutando");
  //   });
  // }

}
