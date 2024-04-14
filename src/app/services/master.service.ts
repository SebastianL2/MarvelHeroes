import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ChractersResults } from '../interfaces/chracters-results';
import { CharacterDataContainer, CharacterDataWrapper } from '../interfaces/character-data-container';
import { ComicDataWrapper } from '../interfaces/comic-data-container';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  
  listarray = [{ "name": "ravi", "mark": "75" }]
  GetData() {
    return this.listarray;
  }
  GetMarvelHeroes():Observable<CharacterDataWrapper>{
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.md5Hash}`);
  }

  GetMarvelHeroesByName(name: string): Observable<CharacterDataWrapper> {
    return this.http.get<CharacterDataWrapper>(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.md5Hash}`);
  }
  GetMarvelComicsById(id: string): Observable<ComicDataWrapper> {
    return this.http.get<ComicDataWrapper>(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?&ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.md5Hash}`);
  }
}
