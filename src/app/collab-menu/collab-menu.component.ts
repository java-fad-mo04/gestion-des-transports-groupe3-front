import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-collab-menu',
  templateUrl: `./collab-menu.component.html`
   ,
  styles: []
})

export class CollabMenuComponent implements OnInit {

  constructor(private _cookieService: CookieService, private _authService: AuthService) { }

  collaborateurConnexion: Collaborateur; // Création d'un mock de Collaborateur pour affichage

  ngOnInit() {
    this.collaborateurConnexion = JSON.parse(this._cookieService.get('col'));
  }

  seDeconnecter(){
    this._authService.seDeconnecter();
  }

}
