import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChractersResults } from '../interfaces/chracters-results';
import { DatePipe } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './card.component.html',
  providers: [DatePipe],
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input () characterInfo!: ChractersResults;
 constructor(private datePipe: DatePipe, private router: Router) {}
  getThumbnailUrl(): string {
    if (this.characterInfo && this.characterInfo.thumbnail) {
      const rtue=this.characterInfo.thumbnail.path +'.'+ this.characterInfo.thumbnail.extension;
      return rtue;
    } else {
      return ''; 
    }
  }
  id='2435'

  formatModified(): string {
    return this.datePipe.transform(this.characterInfo.modified, 'MMMM d, y, h:mm:ss a z') || '';
  }
}
