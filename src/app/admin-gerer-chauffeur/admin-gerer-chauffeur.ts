import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-chauffeur-gerer',
  templateUrl: './admin-gerer-chauffeur.html',
  styleUrls: ['./admin-gerer-chauffeur.css']
})


export class AdminGererChauffeurComponent implements OnInit {


  listeChauffeurs : Observable<string[]>;


  constructor( private dataService: DataService) { }

  rechercherChauffeur( matricule: string, nom: string, prenom: string) {
     this.listeChauffeurs = this.dataService.rechercherChauffeur( matricule, nom, prenom );

  }

  ajouterChauffeur( matricule: string) {
    this.dataService.ajouterChauffeur( matricule);

 }


  ngOnInit() {
    
  }

}
