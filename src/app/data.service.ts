import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 /// subjectAnnonce = new Subject<any[]>();
  constructor(private http: HttpClient) { }
  url_an = 'http://localhost:8080/annonces';
  url_ch = 'http://localhost:8080/chauffeurs';
  //dateDeCejour = new Date();
  //dateTest = this.dateDeCejour.getDate();

  rechercherAnnonceCourante(matricule: number): Observable<any[]> {
    //return this.http.get<any[]>(this.url_an + '?date_depart>' + this.dateTest);
    return this.http.get<any[]>(this.url_an + '?collaborateur=' + matricule);
  }

  rechercherHistoriqueAnnonce(matricule: number): Observable<any[]> {
    return this.http.get<any[]>(this.url_an + '?collaborateur=' + matricule);
        }

}
