import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { Annonce } from '../models/Annonce';

@Component({
  selector: 'app-datatable-lister-annonces-pagination',
  templateUrl: `./datatable-lister-annonces-pagination.component.html`,
  styles: []
})

export class DatatableListerAnnoncesPaginationComponent implements OnInit {

  @Input() listeAnnonces: Annonce[];

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  maxVisibleItems: number = 5;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log("Liste annonces: "+JSON.stringify(this.listeAnnonces));
    this.listeAnnonces.forEach((annonce: Annonce) => {
      this.elements.push({dateDepart: annonce.dateDepart, adresseDepart: annonce.adresseDepart,
         adresseArrivee: annonce.adresseArrivee, nombreReservationsActives: annonce.nombreReservationsActives});
    });
    this.mdbTable.setDataSource(this.elements);
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
