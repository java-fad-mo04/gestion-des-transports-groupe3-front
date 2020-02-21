import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';

import { concat } from 'rxjs/operators';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-collab-table-historique',
  templateUrl: `./collab-table-historique.component.html`,
  styles: []
})
export class CollabTableHistoriqueComponent implements OnInit, AfterViewInit {
  @Input() listeHistorique: any[];

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  headElements = ['Date/Heure', 'Départ', 'Destination', ''];
  maxVisibleItems = 5;

  constructor(private cdRef: ChangeDetectorRef) { }




  ngOnInit() {
    this.mdbTable.setDataSource(this.listeHistorique);
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

