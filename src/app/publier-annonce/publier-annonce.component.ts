import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Annonce } from '../models/annonce';
import { Collaborateur } from '../auth/auth.domains';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-publier-annonce',
  templateUrl: './publier-annonce.component.html',
  styles: []
})
export class PublierAnnonceComponent implements OnInit {

  messageErreur: string;
  messageOk: string;
  isValideFormSubmitted=false;

  id: number;
  depart: string;
  destination: string;
  dureeTrajet: number;
  distance: string;
  immatriculation: string;
  marque: string;
  modele: string;
  passagers: number;
  dateDepart: string;
  MinuteDepart: string ;
  heureDepart:string ;
  ngTemp : NgForm;

  creaAnnonce : Annonce= new Annonce(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
    );

  dateComplete: string;
  constructor(private dataService: DataService, private _cookieService: CookieService) { }

  ngOnInit() {
  }
  onFormSubmit(userForm:NgForm){
    console.log(userForm);
  }

  creerReservation(userForm: NgForm)  {
    this.ngTemp = userForm;
    const collaborateur: Collaborateur= JSON.parse(this._cookieService.get('col'));
    this.messageErreur     = null;
    this.messageOk         = null;

      this.dateComplete=this.ngTemp.value.dateDepart+"T"+this.ngTemp.value.heureDepart+":"+this.ngTemp.value.MinuteDepart;
      console.log(this.dateComplete);
      this.creaAnnonce.collaborateurId=collaborateur.id;
      this.creaAnnonce.dateDepart=this.dateComplete;
      console.log(NgForm);
      console.log(this.creaAnnonce);

    this.dataService.createAnnonce( this.creaAnnonce)
      .subscribe(
        () => {
          this.messageOk = 'Création annonce OK';
          userForm.reset();
        },
        error => {
          console.log( error)
          console.log( error.status)
          if( error.status == 200){
            // Pas d'erreur
            this.messageOk = 'Création annonce OK';
            userForm.reset();
          }else{
            // Erreur renvoyée par le back
            this.messageErreur =  error.error
            userForm.reset();
            }
         }
      );
  }
}
