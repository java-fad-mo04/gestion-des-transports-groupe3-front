import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-chauffeur-rechercher',
  templateUrl: './chauffeur-rechercher.html',
  styleUrls: ['./chauffeur-rechercher.css']
})


export class RechercherChauffeurComponent implements OnInit {


  listeChauffeurs : Observable<string[]>;


  constructor( private dataService: DataService) { }

  rechercherChauffeur( matricule: string, nom: string, prenom: string) {
     this.listeChauffeurs = this.dataService.rechercherChauffeur( matricule, nom, prenom );

  }

  ngOnInit() {
    
  }

}
