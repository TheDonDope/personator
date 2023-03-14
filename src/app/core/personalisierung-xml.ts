export interface PersonalisierungXML {
  Vorname: string | null;
  Nachname: string | null;
  Zusatzwort: string | null;
  Dienststellennummer: string | null;
  Signatur: string | null;
}

export function newPersonalisierungXML(): PersonalisierungXML {
  return {
    Vorname: null,
    Nachname: null,
    Zusatzwort: null,
    Dienststellennummer: null,
    Signatur: null,
  };
}

export function hasXMLPersonalisierungValues(
  personalisierung: PersonalisierungXML
): boolean {
  return (
    !!personalisierung.Vorname ||
    !!personalisierung.Nachname ||
    !!personalisierung.Zusatzwort ||
    !!personalisierung.Dienststellennummer ||
    !!personalisierung.Signatur
  );
}
