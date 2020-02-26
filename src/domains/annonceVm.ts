import { CollaborateurVm } from "./collaborateurVm";

export class AnnonceVm {

id: number;
adresseDepart: string;
adresseArrivee: string;
immatriculation: string;
marque: string;
modele: string;
nombrePlacesDispo: number;
dateDepart: Date;
statut: string;
collaborateurId: number;
collaborateurDetails: CollaborateurVm;

constructor(
  ) { }
}
