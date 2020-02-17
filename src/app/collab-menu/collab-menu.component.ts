import { Component, OnInit } from '@angular/core';
import { Collegue } from '../auth/auth.domains';


@Component({
  selector: 'app-collab-menu',
  templateUrl: `./collab-menu.component.html`
   ,
  styles: []
})
export class CollabMenuComponent implements OnInit {

  constructor() { }

  collegueConnexion = new Collegue( {nom: 'Victor', prenom: 'Hugo'});

  ngOnInit() {


  }

}
