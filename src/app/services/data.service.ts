import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Chauffeur } from '../models/Chauffeur';
import { Annonce } from '../models/Annonce';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';

const urlRechercher = environment.backendUrl + environment.RechercherchauffeurUrl;
const urlCreer = environment.backendUrl + environment.CreerchauffeurUrl;
const urlAnnonces =  environment.backendUrl + "annonces";

@Injectable({
  providedIn: 'root'
})

export class DataService {


  constructor(private httpClient: HttpClient) { }

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

  createAnnonce(newAnnonces: Annonce): Observable<String>{
    console.log( urlAnnonces)
    console.log( newAnnonces)
    return this.httpClient.post<String>(urlAnnonces, newAnnonces);
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

