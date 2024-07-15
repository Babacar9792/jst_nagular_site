import { Component, OnInit } from '@angular/core';
import {
  Carousel,
  initTWE,
} from "tw-elements";






@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent  implements OnInit {
  ngOnInit(): void {
    initTWE({ Carousel });
  }

  


}
