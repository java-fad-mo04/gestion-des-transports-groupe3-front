import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../models/Annonce';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Collaborateur } from '../auth/auth.domains';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-collab-annonces',
  templateUrl: `collab-annonces.component.html`,
  styles: []
})

export class CollabAnnoncesComponent implements OnInit {

  listeAnnoncesEnCours: Annonce[];
  listeAnnoncesPassees: Annonce[];

  constructor(private _http: HttpClient, private _cookieService: CookieService) {
  }

  ngOnInit() {
    const collaborateur: Collaborateur= JSON.parse(this._cookieService.get('col'));
        this._http.get(`${environment.baseUrl}annonces?cid=${collaborateur.id}`).subscribe((data: Annonce[]) => {
          console.log(data);
          this.listeAnnoncesEnCours = data.filter(annonce => new Date(annonce.dateDepart) > new Date());
          this.listeAnnoncesPassees = data.filter(annonce => new Date(annonce.dateDepart) < new Date());
        }, (error: any) => {
        });
  }

}
