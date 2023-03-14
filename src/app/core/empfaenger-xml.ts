export interface EmpfaengerXML {
  PersonKundennummer: string | null;
  PersonAnrede: string | null;
  PersonVorname: string | null;
  PersonNachname: string | null;
  PersonZusatzwort: string | null;
  PersonGeschlecht: string | null;
  PersonAdresszusatz: string | null;
  PersonPostadresseStrasse: string | null;
  PersonPostAdresseOrt: string | null;
  PersonPostAdressePLZ: string | null;
  PersonLand: string | null;
}

export function newEmpfaengerXML(): EmpfaengerXML {
  return {
    PersonKundennummer: null,
    PersonAnrede: null,
    PersonVorname: null,
    PersonNachname: null,
    PersonZusatzwort: null,
    PersonGeschlecht: null,
    PersonAdresszusatz: null,
    PersonPostadresseStrasse: null,
    PersonPostAdresseOrt: null,
    PersonPostAdressePLZ: null,
    PersonLand: null,
  };
}

export function hasXMLEmpfaengerValues(empfaenger: EmpfaengerXML): boolean {
  return (
    !!empfaenger.PersonKundennummer ||
    !!empfaenger.PersonAnrede ||
    !!empfaenger.PersonVorname ||
    !!empfaenger.PersonNachname ||
    !!empfaenger.PersonZusatzwort ||
    !!empfaenger.PersonGeschlecht ||
    !!empfaenger.PersonAdresszusatz ||
    !!empfaenger.PersonPostadresseStrasse ||
    !!empfaenger.PersonPostAdresseOrt ||
    !!empfaenger.PersonPostAdressePLZ ||
    !!empfaenger.PersonLand
  );
}
