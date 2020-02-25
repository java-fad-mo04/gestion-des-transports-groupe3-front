import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chauffeur } from '../models/Chauffeur';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';



const urlRechercher = environment.backendUrl + environment.RechercherchauffeurUrl;
const urlCreer      = environment.backendUrl + environment.CreerchauffeurUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  rechercherChauffeur( matricule : string, nom: string, prenom: string): Observable<string[]> {
    let chauffeur:Observable<string[]>
    
    chauffeur = this.httpClient.get<string[]>(urlRechercher + '?matricule=' + matricule + '&nom=' + nom + '&prenom=' + prenom)
    chauffeur.forEach(element => {
      console.log( element)
    });
    
    return chauffeur;

  }

  ajouterChauffeur( newMatricule: String): Observable<void> {
    return this.httpClient.post<void>( urlCreer, newMatricule);
  }

  
  
}
