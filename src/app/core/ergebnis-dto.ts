import { Ergebnis } from './ergebnis';

export interface ErgebnisDTO {
  ergebnisse: Ergebnis[];
}

export function hasErgebnisse(ergebnisDTO: ErgebnisDTO): boolean {
  return !!ergebnisDTO && ergebnisDTO.ergebnisse.length > 0;
}

export function newErgebnisDTO(): ErgebnisDTO {
  return {
    ergebnisse: [],
  };
}
