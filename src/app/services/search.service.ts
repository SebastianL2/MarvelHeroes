import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResultsSubject = new BehaviorSubject<any[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();
  constructor() { }
  updateSearchResults(results: any[]) {
    this.searchResultsSubject.next(results);
    console.log(this.searchResultsSubject)
  }
  getSearchResults(): Observable<any[]> {
    return this.searchResults$;
  }
}
