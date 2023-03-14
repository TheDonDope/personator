export interface EmpfaengerDTO {
  personKundennummer: string | null;
  personAnrede: string | null;
  personVorname: string | null;
  personNachname: string | null;
  personZusatzwort: string | null;
  personGeschlecht: string | null;
  personAdresszusatz: string | null;
  personPostadresseStrasse: string | null;
  personPostadresseOrt: string | null;
  personPostadressePLZ: string | null;
  personLand: string | null;
}

export function newEmpfaengerDTO(): EmpfaengerDTO {
  return {
    personKundennummer: null,
    personAnrede: null,
    personVorname: null,
    personNachname: null,
    personZusatzwort: null,
    personGeschlecht: null,
    personAdresszusatz: null,
    personPostadresseStrasse: null,
    personPostadresseOrt: null,
    personPostadressePLZ: null,
    personLand: null,
  };
}
