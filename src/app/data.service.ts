import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservationVm } from 'src/domains/reservationVm';
import { Collaborateur } from './auth/auth.domains';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private _cookieService: CookieService) { }


  url_an = 'http://localhost:8080/resa?cid=';

  /* trouve toutes les annonces sur la BDD relative aux annonces de covoiturage d'un
  collaborateur  dont le matricule est passé en paramètre */

  rechercherAnnonceCovoiturage(): Observable<ReservationVm[]> {
    const collaborateur: Collaborateur = JSON.parse(this._cookieService.get('col'));
    console.log(collaborateur.id);
    return this.http.get<any[]>(this.url_an + collaborateur.id);
  }
}
