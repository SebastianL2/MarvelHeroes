import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../services/master.service';
import { SearchService } from '../services/search.service';
import { HomeComponent } from '../home/home.component';
import { Observable, of } from 'rxjs';
import { CharacterDataWrapper } from '../interfaces/character-data-container';
import { CardComponent } from '../card/card.component';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,HomeComponent,CardComponent,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  divVisible: boolean = false;
  divVisible2: boolean = false;
  showMenu: boolean = true;
  @Input('id') characterId!:String;
  public characters$!: Observable<CharacterDataWrapper>
  public searchResults$!: Observable<any[]>;
  heroes: any[] = [];

  searchQuery: string = '';
  constructor(private service:MasterService, private searchService:SearchService, private router: Router){}
  clearSearch() {
    this.searchQuery = '';
  }
  toggleDiv() {
    this.divVisible = !this.divVisible;
  }
  toggleDiv2() {
    this.divVisible2 = !this.divVisible2;
  }
  

  toggleMenu(): void {
    console.log("hola")
    this.showMenu = !this.showMenu;
  }
  searchHeroes() {
    if (this.searchQuery.trim() !== '') {
      
      this.service.GetMarvelHeroesByName(this.searchQuery).subscribe(response => {
        
        console.log(response)
        this.characters$ = of(response)
        
      });
    }
  }
  isComicsRoute(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/home' && currentRoute !== '/';
  }

  ngOnInit(): void {
    
    this.service.GetMarvelHeroes().subscribe(
      (info: CharacterDataWrapper) => {
        
        this.characters$ = of(info); 
      },
      (error) => {
        console.error('Error fetching Marvel heroes:', error);
      }
    );

    this.searchResults$ = this.searchService.getSearchResults();
    
  }




}
