import { Component, Input, OnInit } from '@angular/core';
import { ChractersResults } from '../interfaces/chracters-results';
import { MasterService } from '../services/master.service';
import { CharacterDataWrapper } from '../interfaces/character-data-container';
import { Observable, of } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ComicsCardsComponent } from '../comics-cards/comics-cards.component';
import { Comic, ComicDataWrapper } from '../interfaces/comic-data-container';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule,ComicsCardsComponent],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent implements OnInit {
  

  public comics$!: Observable<ComicDataWrapper>

  constructor(private service: MasterService) {}

  searchQuery: string = '1011334';

  ngOnInit(): void {
    if (this.searchQuery.trim() !== '') {
      this.service.GetMarvelComicsById(this.searchQuery).subscribe(response => {
        console.log("comics", response);
        this.comics$ = of(response);
      });
    }
  }
  }




