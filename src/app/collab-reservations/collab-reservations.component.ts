import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { ReservationVm } from 'src/domains/reservationVm';
import { Statut } from 'src/domains/statut';
import { CookieService } from 'ngx-cookie-service';
import { Collaborateur } from '../auth/auth.domains';


@Component({
  selector: 'app-collab-reservations',
  templateUrl: './collab-reservations.component.html'

})
export class CollabReservationsComponent implements OnInit {
  @Input() matricule: number; // reçoit le matricule du collaborateur pour traitement des reservations
  headElements = ['Date/Heure', 'Départ', 'Destination', '']; // entête de la table
  listeResaCovoiturageCov$: Observable<ReservationVm[]>;
  listeHistoriqueResaCovoiturage: Observable<ReservationVm[]>;
  listResaCovEnCours$: ReservationVm[];
  listeHistoriqueCov: ReservationVm[];
  collaborateur: Collaborateur;

  constructor(private cdRef: ChangeDetectorRef, private dataService: DataService, private _cookieService: CookieService) { }




  ngOnInit() {

    this.listeResaCovoiturageCov$ = this.dataService.rechercherAnnonceCovoiturage();
    /* sur l'observable, il est créé un observateur pour traitement des données
    filtrées par date, par statut Actif, et affichage par date décroissante
    */
    this.listeResaCovoiturageCov$.subscribe((data: ReservationVm[]) => {
      this.listResaCovEnCours$ = data.filter(a => a.statut === Statut.ACTIF).
      filter(a => new Date (a.annonceDetails.dateDepart).valueOf() >= new Date().valueOf()).
      sort((b, a) => new Date (a.annonceDetails.dateDepart).valueOf() - new Date(b.annonceDetails.dateDepart).valueOf());
    });


     /* sur l'observable, il est créé un observateur pour traitement des données;
   filtrées par statut Actif, affichage par date décroissante et tout statut
    */

    this.listeHistoriqueResaCovoiturage = this.dataService.rechercherAnnonceCovoiturage();
    this.listeHistoriqueResaCovoiturage.subscribe((data: ReservationVm[]) => {

      this.listeHistoriqueCov = data.filter(a => a.statut === Statut.ACTIF).
      filter(a => new Date (a.annonceDetails.dateDepart).valueOf() <= new Date().valueOf()).
      sort((b, a) =>
      new Date (a.annonceDetails.dateDepart).valueOf() - new Date(b.annonceDetails.dateDepart).valueOf());
      console.log(this.listeHistoriqueCov);
         });


  }
}
