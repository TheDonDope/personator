import { Ergebnis } from './ergebnis';

export interface ErgebnisDTO {
  ergebnisse: Ergebnis[];
}

export function newErgebnisDTO(): ErgebnisDTO {
  return {
    ergebnisse: [],
  };
}
