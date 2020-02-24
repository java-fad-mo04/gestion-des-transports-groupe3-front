import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { concat } from 'rxjs/operators';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { DataService } from '../data.service';

@Component({
  selector: 'app-collab-reservations',
  templateUrl: './collab-reservations.component.html'

})
export class CollabReservationsComponent implements OnInit {

  headElements = ['Date/Heure', 'Départ', 'Destination', ''];
  listeReservationCovoiturageEnCours$: Observable<any[]>;
  listeHistoriqueReservationCovoiturage$: Observable<any[]>;

  constructor(private cdRef: ChangeDetectorRef, private dataService: DataService) { }


  matricule = 2;

  ngOnInit() {
    this.listeReservationCovoiturageEnCours$ = this.dataService.rechercherAnnonceCourante(this.matricule);
    this.listeHistoriqueReservationCovoiturage$ = this.dataService.rechercherHistoriqueAnnonce(this.matricule);


  }
}
