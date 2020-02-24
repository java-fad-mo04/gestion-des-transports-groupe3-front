import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../models/Annonce';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { Collaborateur } from '../auth/auth.domains';

@Component({
  selector: 'app-collab-annonces',
  templateUrl: `collab-annonces.component.html`,
  styles: []
})

export class CollabAnnoncesComponent implements OnInit {

  listeAnnoncesEnCours: Annonce[];
  listeAnnoncesPassees: Annonce[];

  constructor(private _http: HttpClient, private _authSrv: AuthService) {
  }

  ngOnInit() {
    this._authSrv.collaborateurConnecteObs.subscribe(
      (collaborateur: Collaborateur) => {
        //this._http.get(`${environment.baseUrl}annonces?cid=${collaborateur.id}`).subscribe((data: Annonce[]) => {
          this._http.get(`${environment.baseUrl}annonces?cid=1`).subscribe((data: Annonce[]) => {
          console.log(data);
          this.listeAnnoncesEnCours = data.filter(annonce => new Date(annonce.dateDepart) > new Date());
          this.listeAnnoncesPassees = data.filter(annonce => new Date(annonce.dateDepart) < new Date());
        }, (error: any) => {
        });
      });


  }

}
