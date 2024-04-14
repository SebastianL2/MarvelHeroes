import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../services/master.service';
import { SearchService } from '../services/search.service';
import { HomeComponent } from '../home/home.component';
import { Observable, of } from 'rxjs';
import { CharacterDataWrapper } from '../interfaces/character-data-container';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,HomeComponent,CardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  divVisible: boolean = false;
  divVisible2: boolean = false;
 

  public characters$!: Observable<CharacterDataWrapper>
  public searchResults$!: Observable<any[]>;
  heroes: any[] = [];

  searchQuery: string = '';
  constructor(private service:MasterService, private searchService:SearchService){}
  clearSearch() {
    this.searchQuery = '';
  }
  toggleDiv() {
    this.divVisible = !this.divVisible;
  }
  toggleDiv2() {
    this.divVisible2 = !this.divVisible2;
  }

  searchHeroes() {
    if (this.searchQuery.trim() !== '') {
      
      this.service.GetMarvelHeroesByName(this.searchQuery).subscribe(response => {
        
        console.log(response)
        this.characters$ = of(response)
        
      });
    }
  }
 

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
