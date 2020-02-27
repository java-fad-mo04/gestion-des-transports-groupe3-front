import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  subjectColNew = new Subject<any>();
  constructor(private http: HttpClient) { }

url_an = 'http://localhost:8080/annonces';
url_ch = 'http://localhost:8080/chauffeurs';

dateDeCejour = new Date();

dateTest = this.dateDeCejour.getDate() - 1;

  rechercherAnnonceCourante(): Observable<any[]> {
    return this.http.get<any[]>(this.url_an + '?date_depart>' + this.dateTest);
  }

  rechercherHistoriqueAnnonce() : Observable<any[]>{
  return this.http.get<any[]>(this.url_an) ;
}

  rechercherNomChauffeur(idChauffeur: number): Observable<any> {
    return this.http.get<any>(this.url_ch + '?collegue_id=' + idChauffeur);
  }
}
