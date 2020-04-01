/** Représente le concept d'un annonce */
import {Collaborateur} from '../auth/auth.domains';

export class Annonce {

  constructor(public id: number, public adresseDepart: string, public adresseArrivee: string, public immatriculation: string,
     public marque: string, public modele: string, public nombrePlacesDispo: number, public dateDepart: string,
      public statut: string, public collaborateurId: number, public nombreReservationsActives: number,
       public collaborateurDetails?: Collaborateur) {
  }

}
