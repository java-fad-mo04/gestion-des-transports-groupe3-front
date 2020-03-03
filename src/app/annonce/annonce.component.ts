import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce',
  template: `
    <p>
      annonce works!
    </p>
  `,
  styles: []
})
export class AnnonceComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  creerAnnonce(){
    console.log('Création d’un nouvelle annonce');
  }

}
