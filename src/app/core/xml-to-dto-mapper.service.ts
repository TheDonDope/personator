import { Injectable } from '@angular/core';
import { XMLParser } from 'fast-xml-parser';

import { EmpfaengerDTO } from './empfaenger-dto';
import { hasXMLEmpfaengerValues } from './empfaenger-xml';
import { PersonalisierungDTO } from './personalisierung-dto';
import { hasXMLPersonalisierungValues } from './personalisierung-xml';

@Injectable({
  providedIn: 'root',
})
export class XMLtoDTOMapperService {
  mapXMLtoEmpfaengerDTOList(xml: string): EmpfaengerDTO[] {
    const listEmpfaenger: EmpfaengerDTO[] = [];

    const parser = new XMLParser();
    const empfaengerJSON = parser.parse(xml);

    for (const empfaenger of empfaengerJSON.Empfaengerliste.Empfaenger) {
      if (hasXMLEmpfaengerValues(empfaenger)) {
        const mappedEmpfaenger: EmpfaengerDTO = {
          personKundennummer: empfaenger.PersonKundennummer,
          personAnrede: empfaenger.PersonAnrede,
          personVorname: empfaenger.PersonVorname,
          personNachname: empfaenger.PersonNachname,
          personZusatzwort: empfaenger.PersonZusatzwort,
          personGeschlecht: empfaenger.PersonGeschlecht,
          personAdresszusatz: empfaenger.PersonAdresszusatz,
          personPostadresseStrasse: empfaenger.PersonPostadresseStrasse,
          personPostadresseOrt: empfaenger.PersonPostAdresseOrt,
          personPostadressePLZ: empfaenger.PersonPostAdressePLZ,
          personLand: empfaenger.PersonLand,
        };

        listEmpfaenger.push(mappedEmpfaenger);
      }
    }

    return listEmpfaenger;
  }

  mapXMLtoPersonalisierungDTOList(xml: string): PersonalisierungDTO[] {
    const listPersonalisierungen: PersonalisierungDTO[] = [];

    const parser = new XMLParser();
    const personalisierungenJSON = parser.parse(xml);

    for (const personalisierung of personalisierungenJSON.Personalisierungen
      .Personalisierung) {
      if (hasXMLPersonalisierungValues(personalisierung)) {
        const mappedPersonalisierung: PersonalisierungDTO = {
          absenderVorname: personalisierung.Vorname,
          absenderNachname: personalisierung.Nachname,
          absenderZusatzwort: personalisierung.Zusatzwort,
          dstNummer: personalisierung.Dienststellennummer,
          signatur: personalisierung.Signatur,
        };

        listPersonalisierungen.push(mappedPersonalisierung);
      }
    }

    return listPersonalisierungen;
  }
}
