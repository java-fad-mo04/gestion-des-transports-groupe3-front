import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import { concat } from 'rxjs/operators';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-collab-reservations',
  templateUrl: './collab-reservations.component.html'

})
export class CollabReservationsComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  headElements = ['Date/Heure', 'Départ', 'Destination', ''];
  maxVisibleItems = 5;

  constructor(private cdRef: ChangeDetectorRef) { }

  listeAnnonce = [{ id: 1, adresseDepart: '145, rue de Verdun,Carcassonne', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '20/02/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 2, adresseDepart: '145, rue de Gibraltar,Carcassonne', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '19/02/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 3, adresseDepart: '145, rue de Gibraltar,Paris', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '18/02/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }];

  his = [{ id: 4, adresseDepart: '145, rue de Verdun,Carcassonne', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '16/02/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 5, adresseDepart: '1, rue de Marseille,Aix', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '16/01/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 6, adresseDepart: '14, rue de Marsac, Bayonne', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '10/01/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 7, adresseDepart: '14, rue de Marsac, Pau', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '10/01/2019 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 8, adresseDepart: '14, rue de Pompidor, Nantes', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '10/01/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 9, adresseDepart: '14, rue du midi, Albi', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '4/01/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }, { id: 10, adresseDepart: '14, rue du Soleil, Marseille', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '10/01/2020 14:30:00 ', statut: 'user', idCollegue: 1
  },{  id: 11, adresseDepart: '14, rue du Soleil, Marseille', adresseArrivee: '23, rue Petit Jean,Montpellier', immatriculation: '12-QS-124', marque: 'Peugeot', modele: '407', nombrePlacesDispo: 3, dateDepart: '10/01/2020 14:30:00 ', statut: 'user', idCollegue: 1
  }];

  historiqueAnnonce = this.his.concat(this.listeAnnonce);

  ngOnInit() {
    this.mdbTable.setDataSource(this.historiqueAnnonce);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }
  ngAfterViewInit(): void {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();

  }

}
