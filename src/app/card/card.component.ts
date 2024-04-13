import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChractersResults } from '../interfaces/chracters-results';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input () characterInfo!: ChractersResults;

 getDetailUrl(urls: any[]): string {
  const detailUrl = urls.find(url => url.type === 'detail');
  return detailUrl ? detailUrl.url : '';
}
}
