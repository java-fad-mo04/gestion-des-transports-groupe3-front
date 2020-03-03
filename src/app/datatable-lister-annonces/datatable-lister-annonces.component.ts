import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import {Annonce} from '../models/Annonce';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datatable-lister-annonces',
  templateUrl: `./datatable-lister-annonces.component.html`,
  styles: []
})

export class DatatableListerAnnoncesComponent implements OnInit {

  @Input() listeAnnonces: Annonce[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  annuler(annonceId: number): void {
    console.log(this.dataService.annulerAnnonce(annonceId));
  }

}
