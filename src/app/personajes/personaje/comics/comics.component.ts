import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonajesApiService } from './../shared/personajes-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  

  constructor(private comicServices: PersonajesApiService, private router: Router,
    public route: ActivatedRoute) { }
    comics:Observable<any>;
    public page!:number;

  ngOnInit(): void {

    this.route.params.subscribe((params :Params)=>{
      let idpersonaje=params['id'];
      this.comics = this.comicServices.getComics(idpersonaje);
    }
    ) 

  }

}
