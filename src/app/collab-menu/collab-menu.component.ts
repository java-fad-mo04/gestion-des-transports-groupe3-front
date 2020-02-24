import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-collab-menu',
  templateUrl: `./collab-menu.component.html`
   ,
  styles: []
})
export class CollabMenuComponent implements OnInit {

  constructor(private _authSrv: AuthService) { }

  collaborateurConnexion: Collaborateur; // Création d'un mock de Collaborateur pour affichage

  ngOnInit() {
    this._authSrv.collaborateurConnecteObs.subscribe(
      (collaborateur: Collaborateur) => {this.collaborateurConnexion = collaborateur; });
  }

}
