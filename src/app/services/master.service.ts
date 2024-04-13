import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ChractersResults } from '../interfaces/chracters-results';
import { CharacterDataContainer, CharacterDataWrapper } from '../interfaces/character-data-container';

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


}
