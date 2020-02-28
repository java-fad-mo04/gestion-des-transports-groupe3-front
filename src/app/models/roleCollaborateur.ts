import { ok } from "assert";
import { of } from "rxjs";

/**
 * Collaborateur utilisateur de l'application.
 */
export class RoleCollaborateur {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  numeroTel: string;
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

    for (str of this.roles) {
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
    for (str of this.roles) {
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
    for (str of this.roles) {
      if (str === this.CHAUFFEUR) {
        oK = true;
      }
    }
    return oK;
  }


}
