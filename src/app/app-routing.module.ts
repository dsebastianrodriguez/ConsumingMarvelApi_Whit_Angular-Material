import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { ComicsComponent } from './personajes/personaje/comics/comics.component';

const routes: Routes = [{
  path:'',component:PersonajesComponent
},
{

  path:'personajes', component:PersonajesComponent,children:[
    
    {path:'personaje/:id', component:PersonajeComponent,children:[
    
      {path: ':id/comics', component:ComicsComponent}
    ]
  }]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
