import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsCardsComponent } from './comics-cards.component';
import { Observable } from 'rxjs';
import { CharacterDataWrapper } from '../interfaces/character-data-container';

describe('ComicsCardsComponent', () => {
    
  let component: ComicsCardsComponent;
  let fixture: ComponentFixture<ComicsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
