import { Component, Input } from '@angular/core';
import { AboutIterface } from '../interfaces/about-iterface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) details !: AboutIterface;
}
