import { Component, Input, OnInit } from '@angular/core';
import { ChractersResults } from '../interfaces/chracters-results';
import { MasterService } from '../services/master.service';
import { CharacterDataWrapper } from '../interfaces/character-data-container';
import { Observable, of } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ComicsCardsComponent } from '../comics-cards/comics-cards.component';
import { Comic, ComicDataWrapper } from '../interfaces/comic-data-container';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule,ComicsCardsComponent,RouterLink],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent  {
  

  public comics$!: Observable<ComicDataWrapper>

  constructor(private service: MasterService,private route: ActivatedRoute) {}

  @Input('id') characterId!:string;
  ngOnInit(): void {


    if (this.characterId.trim() !== '') {
      this.service.GetMarvelComicsById(this.characterId).subscribe(response => {
        console.log("comics", response);
        this.comics$ = of(response);
      });
    }
  }
  }




