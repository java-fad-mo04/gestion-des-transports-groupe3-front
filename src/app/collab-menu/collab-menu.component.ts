import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../auth/auth.domains';


@Component({
  selector: 'app-collab-menu',
  templateUrl: `./collab-menu.component.html`
   ,
  styles: []
})
export class CollabMenuComponent implements OnInit {

  constructor() { }

  collaborateurConnexion = new Collaborateur( {nom: 'Victor', prenom: 'Hugo'}); // Création d'un mock de Collaborateur pour affichage

  ngOnInit() {


  }

}
