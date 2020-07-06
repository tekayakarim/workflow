import { Employe } from "./employe";
import { Voiture } from "./voiture";
export class DemandeVoiture {
  id: number;
  emp: Employe;
  typeMission: string;
  description: string;
  statut: number;
  nbPassergers: number;
  poids: number;
  dataDebut: string;
  dataFin: string;
  voiture:Voiture;
  lieu_depart:string;
  temps_depart:string;
  lieu_destination:string;
  date_retour:string;
  temps_retour:string;
  accompagants:string;
  motifR:string;
}
