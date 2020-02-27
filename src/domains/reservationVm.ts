import { AnnonceVm } from "./annonceVm";
import { CollaborateurVm } from "./collaborateurVm";

export class ReservationVm {

  id: number;
  annonceId: number;
  annonceDetails: AnnonceVm;
  collaborateuId: number;
  collaborateurDetails: CollaborateurVm;
  statut: string;

  constructor(
  ) { }
}


