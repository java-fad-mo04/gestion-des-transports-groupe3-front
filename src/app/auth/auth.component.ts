import { Component, OnInit } from '@angular/core';
import {Collaborateur} from "./auth.domains";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

/**
 * Formulaire d'authentification.
 */
@Component({
  selector: 'app-auth',
  template: `

    <mdb-card class="animated zoomIn">
      <mdb-card-header class="primary-color white-text">
        <h4 class="text-center">Authentification</h4>
      </mdb-card-header>
      <mdb-card-body>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>
              <h4>Utilisateurs</h4>
            </mdb-card-title>
            <mdb-card-text>
              Deux utilisateurs sont créés par défaut :
              <ul>
                <li>admin@dev.fr / superpass / ROLE_ADMINISTRATEUR, ROLE_UTILISATEUR</li>
                <li>user@dev.fr / superpass / ROLE_UTILISATEUR</li>
              </ul>

            </mdb-card-text>

          </mdb-card-body>
        </mdb-card>
        <form>
          <div class="md-form">
            <i class="fa fa-envelope prefix grey-text"></i>
            <input type="text" [validateSuccess]="false" placeholder="Email" aria-label="Email" data-error="Une adresse email est requise" id="defaultForm-email" class="form-control" name="email" mdbInputDirective [(ngModel)]="collaborateur.email" required>
          </div>

          <div class="md-form">
            <i class="fa fa-lock prefix grey-text"></i>
            <input type="password" id="defaultForm-pass" placeholder="Mot de Passe" aria-label="Mot de Passe"[validateSuccess]="false"  data-error="Un mot de passe est requis" name="motDePasse" class="form-control" mdbInputDirective [(ngModel)]="collaborateur.motDePasse" required>
          </div>

          <div class="text-center">
            <input type="submit" mdbBtn color="primary" sclass="waves-light" mdbWavesEffect value="Se connecter" (click)="connecter()">
          </div>

          <div *ngIf="err" class="text-danger">
            Vos informations d'authentification sont invalides.
          </div>


        </form>
      </mdb-card-body>
    </mdb-card>

  `,
  styles: []
})
export class AuthComponent implements OnInit {


  collaborateur:Collaborateur = new Collaborateur({});
  err:boolean;

  constructor(private _authSrv: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  connecter() {
    this._authSrv.connecter(this.collaborateur.email, this.collaborateur.motDePasse)
      .subscribe(
        // en cas de succès, redirection vers la page /connexion/profil
        col => this._router.navigate(['/connexion/profil']),

        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

}
