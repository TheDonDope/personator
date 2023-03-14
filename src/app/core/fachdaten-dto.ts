export interface FachdatenDTO {
  beginnErstattungszeitraum: Date | null;
  endeErstattstungszeitraum: Date | null;
  leistungsart: string | null;
  begründungAufhebung: string | null;
  vertragsgegenstandsnummer: string | null;
  leistungssatz: string | null;
}

export function newFachdatenDTO(): FachdatenDTO {
  return {
    beginnErstattungszeitraum: null,
    endeErstattstungszeitraum: null,
    leistungsart: null,
    begründungAufhebung: null,
    vertragsgegenstandsnummer: null,
    leistungssatz: null,
  };
}
