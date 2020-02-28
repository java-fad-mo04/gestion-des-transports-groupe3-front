import { ok } from "assert";

/**
 * Collaborateur utilisateur de l'application.
 */
export class Collaborateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  numeroTel: string;
  motDePasse: string;
  roles: string[];



  constructor(params: any) {
    Object.assign(this, params);
  }
  ADMIN = 'ROLE_ADMINISTRATEUR';
  CHAUFFEUR = 'ROLE_CHAUFFEUR';
  UTILISATEUR = 'ROLE_UTILISATEUR';

  estAnonyme(): boolean {
    return this.email === undefined;
  }

  /* Retourne true si le collaborateur est connecté en tant qu'administrateur
   */

  estAdministrateur(): boolean {

     let oK = false;
     let str: string;
     for (str in  this.roles) {
       if (str === this.ADMIN) {
         oK = true;
       }
     }
    return oK;
  }

  /* Retourne true si le collaborateur est connecté en tant que collaborateur
  */

 estCollaborateur(): boolean {
  let oK = false;
  let str: string;
  for (str in  this.roles) {
    if (str === this.UTILISATEUR) {
      oK = true;
    }
  }
 return oK;
}

 /**
  * Retourne true si le collaborateur est connecté en tant que chauffeur
  */

 estChauffeur(): boolean {
  let oK = false;
  let str: string;
  for (str in  this.roles) {
    if (str === this.CHAUFFEUR) {
      oK = true;
    }
  }
 return oK;
}


}
