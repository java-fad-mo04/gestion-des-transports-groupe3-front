import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import { Chauffeur } from '../models/Chauffeur';



@Component({
  selector: 'app-chauffeur-gerer',
  templateUrl: './admin-gerer-chauffeur.html',
  styleUrls: ['./admin-gerer-chauffeur.css']
})


export class AdminGererChauffeurComponent implements OnInit {


  listeChauffeurs: Observable<string[]>;

  creaChauffeur: Chauffeur = new Chauffeur();
  messageErreur: string;
  messageOk: string;

  constructor(private dataService: DataService) { }

  rechercherChauffeur(matricule: string, nom: string, prenom: string) {
    this.listeChauffeurs = this.dataService.rechercherChauffeur(matricule, nom, prenom);

  }


  ajouterChauffeur(etatForm: NgForm) {
    this.messageErreur     = null;
    this.messageOk         = null;

    this.dataService.ajouterChauffeur( this.creaChauffeur)
      .subscribe(
        () => {
          this.messageOk = 'Création du chauffeur OK';
          etatForm.reset();
        },
        error => {
          console.log( error)
          console.log( error.status)
          if( error.status == 200){
            // Pas d'erreur
            this.messageOk = 'Création du chauffeur OK';
            etatForm.reset();
          }else{
            // Erreur renvoyée par le back
            this.messageErreur =  error.error
            etatForm.reset();        
            }         
         }
      );
  }


  ngOnInit() {

  }

}
