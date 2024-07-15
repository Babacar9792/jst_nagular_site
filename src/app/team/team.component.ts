import { Component } from '@angular/core';
import { CardTeamComponent } from './card-team/card-team.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CardTeamComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  team : any[] = [
    {
      prenom : "",
      nom : "",
      photo : "",
      comptes : {
        email : "",
        facebook : "",
        linkedIn : "",
        twitter : ""

      }

    },
    {
      prenom : "",
      nom : "",
      photo : "",
      comptes : {
        email : "",
        facebook : "",
        linkedIn : "",
        twitter : ""

      }

    },
    {
      prenom : "",
      nom : "",
      photo : "",
      comptes : {
        email : "",
        facebook : "",
        linkedIn : "",
        twitter : ""

      }

    },
    {
      prenom : "",
      nom : "",
      photo : "",
      comptes : {
        email : "",
        facebook : "",
        linkedIn : "",
        twitter : ""

      }

    }
  ]

}
