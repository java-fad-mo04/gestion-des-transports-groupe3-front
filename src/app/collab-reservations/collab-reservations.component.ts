import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { ReservationVm } from 'src/domains/reservationVm';
import { Statut } from 'src/domains/statut';


@Component({
  selector: 'app-collab-reservations',
  templateUrl: './collab-reservations.component.html'

})
export class CollabReservationsComponent implements OnInit {

  headElements = ['Date/Heure', 'Départ', 'Destination', ''];
  listeResaCovoiturageCov$: Observable<ReservationVm[]>;
  listeHistoriqueResaCovoiturage: Observable<ReservationVm[]>;
  listResaCovEnCours$: ReservationVm[];
  listeHistoriqueCov: ReservationVm[];

  constructor(private cdRef: ChangeDetectorRef, private dataService: DataService) { }

  dateDuJourTest = '2010-12-10T05:00:00';
  matricule = 5;

  ngOnInit() {
    this.listeResaCovoiturageCov$ = this.dataService.rechercherAnnonceCourante(this.matricule);
    /* sur l'observable, il est créé un observateur pour traitement des données
    filtre par date, par statut Actif, et affichage par date de la
    */
    this.listeResaCovoiturageCov$.subscribe((data: ReservationVm[]) => {

      this.listResaCovEnCours$ = data.filter(a => a.statut === Statut.ACTIF).
      filter(a => new Date (a.annonceDetails.dateDepart).valueOf() >= new Date(this.dateDuJourTest).valueOf()).
      sort((b, a) => new Date (a.annonceDetails.dateDepart).valueOf() - new Date(b.annonceDetails.dateDepart).valueOf());

    });

    this.listeHistoriqueResaCovoiturage = this.dataService.rechercherHistoriqueAnnonce(this.matricule);
    this.listeHistoriqueResaCovoiturage.subscribe((data: ReservationVm[]) => {

      this.listeHistoriqueCov = data.sort((b, a) =>
      new Date (a.annonceDetails.dateDepart).valueOf() - new Date(b.annonceDetails.dateDepart).valueOf());
      console.log(this.listeHistoriqueCov);
         });


  }
}
