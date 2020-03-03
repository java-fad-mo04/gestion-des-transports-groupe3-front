import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Chauffeur } from '../models/Chauffeur';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { Annonce } from '../models/Annonce';
import { tap } from 'rxjs/operators';

const urlRechercher = environment.backendUrl + environment.RechercherchauffeurUrl;
const urlCreer = environment.backendUrl + environment.CreerchauffeurUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // création du bus d'événement
  subjectListeAnnonces = new Subject<Annonce[]>();

  constructor(private httpClient: HttpClient) {
  }

  rechercherChauffeur(matricule: string, nom: string, prenom: string): Observable<string[]> {
    let chauffeur: Observable<string[]>;
    let urlGet: string;

    urlGet = urlRechercher + '?matricule=' + matricule + '&nom=' + nom + '&prenom=' + prenom;
    console.log(urlGet);
    chauffeur = this.httpClient.get<string[]>(urlGet);
    chauffeur.forEach(element => {
      console.log(element);
    });

    return chauffeur;

  }

  ajouterChauffeur( newChauffeur: Chauffeur): Observable<void> {
    let urlPost = urlCreer + '?matricule=' + newChauffeur.matricule;
    console.log( urlPost);
    console.log( newChauffeur);
    return this.httpClient.post<void>( urlPost, newChauffeur);

  }

  /** Permet d'annuler une annonce */
  annulerAnnonce(annonceId: number): string{
    this.httpClient.post(`${environment.backendUrl}annonce?aid=${annonceId}&statut=ANNULE`,{}).
    subscribe((data: any) => {
      console.log(data);
      return data;
    }, ( error: HttpErrorResponse) => {
      console.log('error', error);
      return error;
    });
    return '';
  }

  /** Permet de récupérer la liste des annonces du collaborateur */
  getAnnoncesCollaborateur(cId: number): Observable<Annonce[]> {
    return this.httpClient.get<Annonce[]>(`${environment.backendUrl}annonces?cid=${cId}`);
  }

}
