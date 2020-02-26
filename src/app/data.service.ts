import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ReservationVm } from 'src/domains/reservationVm';
import { AnnonceVm } from 'src/domains/annonceVm';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 /// subjectAnnonce = new Subject<any[]>();
  constructor(private http: HttpClient) { }
  url_an = 'http://localhost:8080/resa?cid=';

  // dateDeCejour = new Date();
  // dateTest = this.dateDeCejour.getDate();

  rechercherAnnonceCourante(matricule: number): Observable<any[]> {

    return this.http.get<any[]>(this.url_an + matricule);
  }

  rechercherHistoriqueAnnonce(matricule: number): Observable<any[]> {
    return this.http.get<any[]>(this.url_an + matricule);
        }

}
