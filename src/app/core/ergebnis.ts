export interface Ergebnis {
  personName: string | null;
  zeitraum: string | null;
  leistungsart: string | null;
  docGUID: string | null;
}

export function newErgebnis(): Ergebnis {
  return {
    personName: null,
    zeitraum: null,
    leistungsart: null,
    docGUID: null,
  };
}
