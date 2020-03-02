import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Annonce } from '../models/annonce';

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
  date: string;

  constructor() { }

  ngOnInit() {
  }
  onFormSubmit(userForm:NgForm){
    console.log(userForm);
  }
  creerReservation()  {

    console.log('Création d’un nouvelle annonce');
  }
}
