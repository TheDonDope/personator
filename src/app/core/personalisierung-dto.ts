export interface PersonalisierungDTO {
  absenderVorname: string | null;
  absenderNachname: string | null;
  absenderZusatzwort: string | null;
  dstNummer: string | null;
  signatur: string | null;
}

export function newPersonalisierungDTO(): PersonalisierungDTO {
  return {
    absenderVorname: null,
    absenderNachname: null,
    absenderZusatzwort: null,
    dstNummer: null,
    signatur: null,
  };
}
