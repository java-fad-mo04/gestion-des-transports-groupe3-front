/**
 * Collaborateur utilisateur de l'application.
 */
export class Collaborateur {
  id:number;
  nom:string;
  prenom:string;
  email:string;
  numeroTel:string;
  motDePasse:string;
  roles:string[];

  constructor(params:any) {
    Object.assign(this, params);
  }

  estAnonyme():boolean {
    return this.email == undefined;
  }

  /**
   * Retourne true si le collaborateur est connecté en tant qu'administrateur
   */
  estAdministrateur():boolean {
     // en dur pour l'instant !!!
    return true;                             
  }

  /**
   * Retourne true si le collaborateur est connecté en tant que collaborateur
   */
  estCollaborateur():boolean { 
    // en dur pour l'instant !!!  
    return false;
  }

  /**
   * Retourne true si le collaborateur est connecté en tant que chauffeur
   */
  estChauffeur():boolean { 
    // en dur pour l'instant !!!  
    return false;
  }

}
