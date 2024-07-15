import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { CompetenceComponent } from './competence/competence.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SliderComponent,
    AboutComponent,
    ServiceComponent,
    CompetenceComponent,
    TeamComponent,
    ContactComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'SiteVitrine';

  
}
