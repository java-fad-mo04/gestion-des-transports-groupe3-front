
export class Chauffeur {

  constructor(
    public id?: BigInteger,
    public nom?: string,
    public prenom?: string,
    public email?: string,
    public motDePasse?: string,
    public numeroTel?: string,  
    public matricule?: string,
    public numeroPermis?: string,
    public photoUrl?: string = 'c:/old/chauffeur.png'
  ) {
  }
}
