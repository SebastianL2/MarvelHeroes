import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChractersResults } from '../interfaces/chracters-results';
import { DatePipe } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterDataWrapper } from '../interfaces/character-data-container';
import { Comic, ComicDataWrapper } from '../interfaces/comic-data-container';

@Component({
  selector: 'app-comics-cards',
  standalone: true, 
  imports: [CommonModule,RouterOutlet],
  providers: [DatePipe],
  templateUrl: './comics-cards.component.html',
  styleUrl: './comics-cards.component.css'
})
export class ComicsCardsComponent {
  @Input () comicInfo!: Comic;
  constructor(private datePipe: DatePipe, private router: Router) {}
   getThumbnailUrl(): string {
     if (this.comicInfo && this.comicInfo.thumbnail) {
       const rtue=this.comicInfo.thumbnail.path +'.'+ this.comicInfo.thumbnail.extension;
       
       console.log("ruta",this.comicInfo.thumbnail.path," > ",  this.comicInfo.thumbnail.extension)
       return rtue;
     } else {
       return ''; 
     }
   }
 
 navigateToComics(characterId: number | undefined): void {
   
   if (characterId !== undefined) {
     this.router.navigate(['/comics', { itemId: characterId }]);
   } else {
     this.router.navigate(['/comics', { itemId: 233 }]);
   }
 }
  formatModified(): string {
    if (typeof this.comicInfo.modified === 'string' && this.comicInfo.modified !== "-0001-11-30T00:00:00-0500") {
      const modifiedDate = new Date(this.comicInfo.modified);
      return this.datePipe.transform(modifiedDate, 'MMMM d, y, h:mm:ss a z') || '';
    } else {
      return 'Fecha no disponible';
    }
  }
   
   onSaleDate(): string {
    if (this.comicInfo && this.comicInfo.dates && this.comicInfo.dates.length > 0) {
      return this.datePipe.transform(this.comicInfo.dates[0].date, 'MMMM d, y, h:mm:ss a z') || '';
    } else {
      return '';
    }
   }
}
