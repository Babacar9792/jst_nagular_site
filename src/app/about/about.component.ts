import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { AboutIterface } from './interfaces/about-iterface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  dataDetails : AboutIterface[] = [
    {
      title : "Qui sommes nous?",
      icone : "",
      text : "La mission de la startup consiste à réinventer les standards de l'innovation numérique. Elle se consacre au développement de solutions technologiques avant-gardistes, minutieusement conçues pour anticiper et répondre de manière agile et efficace aux évolutions incessantes des besoins du marché, établissant ainsi de nouvelles références industrielles."
    },
    {
      title : "Expertise Technologique",
      icone : "",
      text : "À JEEF SOLUTION TECH, notre expertise technologique est notre atout majeur. Notre équipe talentueuse est composée de développeurs chevronnés, de spécialistes en intelligence artificielle et en cybersécurité, prêts à relever les défis les plus complexes."
    },
    {
      title : "Engagement envers l'excellence",
      icone : "",
      text : "Nous nous engageons fermement envers l'excellence, de la conception initiale à la livraison du projet. Notre approche agile nous permet de nous adapter rapidement aux besoins changeants de nos clients, garantissant ainsi le succès de chaque projet."
    },
    {
      title : "Collaboration et satisfaction client",
      icone : "",
      text : "Chez JEEF SOLUTION TECH, nous valorisons la collaboration et nous nous engageons à fournir des solutions technologiques sur mesure qui dépassent les attentes de nos clients. Votre satisfaction est notre priorité, et nous sommes là pour vous accompagner à chaque étape de votre parcours technologique."
    }
  ];


}
