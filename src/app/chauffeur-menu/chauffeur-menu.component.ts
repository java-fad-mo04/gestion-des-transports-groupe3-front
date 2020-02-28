import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../auth/auth.domains';


@Component({
  selector: 'app-chauffeur-menu',
  templateUrl: `./chauffeur-menu.component.html`
   ,
  styles: []
})

export class ChauffeurMenuComponent implements OnInit {

  constructor() { }

  collaborateurConnexion = new Collaborateur( {nom: 'Prost', prenom: 'Alain'}); 

  ngOnInit() {


  }

}
