import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { Observable, of } from 'rxjs';
import { ChractersResults } from '../interfaces/chracters-results';
import { CommonModule } from '@angular/common';
import { MasterService } from '../services/master.service';
import { CharacterDataContainer, CharacterDataWrapper } from '../interfaces/character-data-container';
import { RouterOutlet } from '@angular/router';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,HeaderComponent,CommonModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public characters$!: Observable<CharacterDataWrapper>
  public searchResults$!: Observable<any[]>;
  heroes: any[] = [];
  constructor(private service:MasterService,private searchService: SearchService){}

  ngOnInit(): void {
    
    this.service.GetMarvelHeroes().subscribe(
      (info: CharacterDataWrapper) => {
        console.log(info.data); 
        this.characters$ = of(info); 
      },
      (error) => {
        console.error('Error fetching Marvel heroes:', error);
      }
    );

    this.searchResults$ = this.searchService.getSearchResults();
    console.log("datos searhc",this.searchResults$)
  }

}
