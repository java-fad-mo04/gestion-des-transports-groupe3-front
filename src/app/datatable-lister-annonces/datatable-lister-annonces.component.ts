import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import {Annonce} from '../models/Annonce';
import { bindNodeCallback } from 'rxjs';

@Component({
  selector: 'app-datatable-lister-annonces',
  templateUrl: `./datatable-lister-annonces.component.html`,
  styles: []
})
export class DatatableListerAnnoncesComponent implements OnInit {

  @Input() listeAnnonces: Annonce[];

  constructor() { }

  ngOnInit() {
  }

}
