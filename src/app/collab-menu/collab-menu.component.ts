import { Component, OnInit, Injectable } from '@angular/core';
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


  chemin: string[] = [''];
  headMenu: string[] = [''];


  headMenuCollaborateur: string[] = ['Vos Réservations', 'Vos Annonces', 'Statistiques'];
  headMenuAdministrateur: string[] = ['Chauffeurs', 'Véhicules',' '];
  headMenuChauffeur: string[] = ['Planning', 'Occupation', ' '];

  cheminRouteurCollaborateur: string[] = ['collaborateur/reservations', 'collaborateur/annonces', 'collaborateur/statistiques'];
  cheminRouteurChauffeur: string[] = ['chauffeur/planning', 'chauffeur/occupation', ' '];
  cheminRouteurAdministrateur: string[] = ['admin/chauffeurs', 'admin/vehicules',' '];

  constructor(private _cookieService: CookieService, private _authService: AuthService) { }

  collaborateurConnexion: Collaborateur;

 profil: string;

  ngOnInit() {
    this.collaborateurConnexion = JSON.parse(this._cookieService.get('col'));
    this.profil = this._cookieService.get('choixProfil') === null ? '0' : this._cookieService.get('choixProfil');


    switch (this.profil) {
      case '0' : {
        this.chemin = this.cheminRouteurCollaborateur;
        this.headMenu = this.headMenuCollaborateur;
        break;
      }
      case '1': {
      this.chemin = this.cheminRouteurChauffeur;
        this.headMenu = this.headMenuChauffeur;
        break;
      }
      case '2': {
      this.chemin = this.cheminRouteurAdministrateur;
        this.headMenu = this.headMenuAdministrateur;
        break;
      }
    }
  }
  seDeconnecter() {
    this._authService.seDeconnecter();
  }

}

