import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { marvelApi } from './../../../model';
@Injectable({
  providedIn: 'root'
})
export class PersonajesApiService {

  PUBLIC_KEY = 'ea5c51f46f53cf102ddbfda4929b1672';
  HASH = 'c5e2f5faa725913a3a049eb2616d36c5';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters`;
  
  constructor(private http:HttpClient) { }

  getAllPersonajes(): Observable <any> {
    return this.http.get<any>(`${this.URL_API}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).
    pipe(map((data: any)=>data.data.results))
  }

  getpersonaje(id:number): Observable <any>{
    return this.http.get<marvelApi>(`${this.URL_API}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&id=${id}`).
    pipe(map((data: any)=>data.data.results))
    
  }

  getComics(id:number): Observable <any>{
    return this.http.get<any>(`${this.URL_API}/${id}/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).
    pipe(map((data: any)=>data.data.results))

  }

  // getCharacter(id: number){
  //   return this.http.get<marvelApi>(`${this.URL_API}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&id=${id}`);
  // }
}
