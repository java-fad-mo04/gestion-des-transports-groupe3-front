import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Collaborateur } from "./auth/auth.domains";

/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  collaborateurConnecte: Observable<Collaborateur>;

  constructor(private _authSrv: AuthService, private _router: Router, private routeActive: ActivatedRoute ) {

  }

  /**
   * Action déconnecter collaborateur.
   */
  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      () => this._router.navigate(['/connexion'])
    );
  }

  /* Permet d'afficher le menu entête avec nom de l'application et logo
  * est sélectionné en fonction des pages
  */
  afficherEntete(): boolean {

    if ((this._router.url === '/connexion/profil')  ||
    (this._router.url === '/auth') ||
    (this._router.url === '/connexion') ||
    (this._router.url === '/tech')) {

      return true;

    } else {
      return false; }
   }

   /* Permet d'afficher le menu selection des annonces, des réservations et des statisitques
  * est sélectionné pour être visible en dehors des pages de connexion
  */
  afficherMenu(): boolean {

    if ((this._router.url === '/connexion/profil') ||
    (this._router.url === '/auth') ||
    (this._router.url === '/connexion') ||
    (this._router.url === '/tech')) {
      return false;
    } else {
      return true; }
  }

  /**
   * A l'initialisation, le composant s'abonne au flux du collaborateur courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */


  ngOnInit(): void {

    this.collaborateurConnecte = this._authSrv.collaborateurConnecteObs;
  }

}
