import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import { concat } from 'rxjs/operators';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import {Annonce} from '../models/Annonce';

@Component({
  selector: 'app-datatable-lister-annonces',
  templateUrl: `./datatable-lister-annonces.component.html`,
  styles: []
})
export class DatatableListerAnnoncesComponent implements OnInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  headElements = ['Date/Heure de départ', 'Lieu de départ', 'Lieu de destination', 'Nombre de voyageurs'];
  maxVisibleItems = 5;
  page = 1;
  pageSize= 5;

  constructor(private cdRef: ChangeDetectorRef) { }

  @Input() listeAnnonces: Annonce[];

  ngOnInit() {
    this.mdbTable.setDataSource(this.listeAnnonces);
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
