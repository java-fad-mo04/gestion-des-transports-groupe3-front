import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { RoleCollaborateur } from '../models/roleCollaborateur';

@Component({
  selector: 'app-collab-profil',
  templateUrl: './collab-profil.component.html',
  styles: []
})
export class CollabProfilComponent implements OnInit {

  colProfil: RoleCollaborateur;
  ad: Boolean;
  ch: Boolean;
  co: Boolean;
  case: number;
  constructor(private dataAuth: AuthService) { }



  ngOnInit() {

    /* récupère les données des roles du collaborateur */

    this.colProfil = this.dataAuth.trouverRole();
    this.ad = this.colProfil.estAdministrateur();
    this.ch = this.colProfil.estChauffeur();
    this.co = this.colProfil.estCollaborateur();
    if ((!this.ad) && (!this.ch) && (this.co)) { this.case = 0; }
    if ((!this.ad) && (this.ch) && (!this.co)) { this.case = 1; }
    if ((this.ad) && (!this.ch) && (this.co)) { this.case = 2; }
    if ((this.ad) && (!this.ch) && (!this.co)) { this.case = 2; }

console.log(this.ad);
console.log(this.ch);
console.log(this.co);
console.log(this.case);
  }


}
