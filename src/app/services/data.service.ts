import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chauffeur } from '../models/Chauffeur';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';



const url = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  rechercherChauffeur( matricule : string, nom: string, prenom: string): Observable<string[]> {

    return this.httpClient.get<string[]>(url + '?matricule=' + matricule + '?nom=' + nom + '?prenom=' + prenom);

  }

  ajouterChauffeur( newChauffeur: Chauffeur): Observable<void> {
    return this.httpClient.post<void>(url, newChauffeur);
  }

  
  
}
