import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonajesApiService } from './shared/personajes-api.service';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { marvelApi } from './../../model';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  //Personajes: Observable<any>;

  constructor(private personajeServicio:PersonajesApiService,private router: Router,
    public route: ActivatedRoute) { }
    personaje:Observable<any>;

  ngOnInit(): void {
    this.route.params.subscribe((params :Params)=>{
      let idpersonaje=params['id'];
      this.personaje = this.personajeServicio.getpersonaje(idpersonaje);
 }
 )   
  }

  getComics(id: number){
    this.personaje= this.personajeServicio.getComics(id)
    
  }

 

}
