export interface Ergebnis {
  docGUID: string | null;
}

export function newErgebnis(): Ergebnis {
  return {
    docGUID: null,
  };
}
