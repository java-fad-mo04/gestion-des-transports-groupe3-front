import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservationVm } from 'src/domains/reservationVm';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url_an = 'http://localhost:8080/resa?cid=';

  /* trouve toutes les annonces sur la BDD relative aux annonces de covoiturage d'un
  collaborateur  dont le matricule est passé en paramètre */

  rechercherAnnonceCovoiturage(matricule: number): Observable<ReservationVm[]> {
    return this.http.get<any[]>(this.url_an + matricule);
  }
}
