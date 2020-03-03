import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../models/Annonce';
import { Collaborateur } from '../auth/auth.domains';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collab-annonces',
  templateUrl: `collab-annonces.component.html`,
  styles: []
})

export class CollabAnnoncesComponent implements OnInit {

  listeAnnoncesEnCours: Annonce[];
  listeAnnoncesPassees: Annonce[];

  constructor(private dataService: DataService, private _cookieService: CookieService) {
    console.log(this._cookieService.getAll());
  }

  ngOnInit() {
    const collaborateur: Collaborateur = JSON.parse(this._cookieService.get('col'));
    this.dataService.getAnnoncesCollaborateur(collaborateur.id).subscribe((data: Annonce[]) => {
      this.listeAnnoncesEnCours = data.filter(annonce => new Date(annonce.dateDepart) > new Date() && annonce.statut === 'ACTIF');
      this.listeAnnoncesPassees = data.filter(annonce => new Date(annonce.dateDepart) < new Date() && annonce.statut === 'ACTIF');
    });
  }

}
