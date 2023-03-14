import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormRecord, Validators } from '@angular/forms';

import {
  AufhebungsbescheidDTO,
  newAufhebungsbescheidDTO,
} from '../../core/aufhebungsbescheid-dto';
import {
  AufhebungsbescheideDTO,
  newAufhebungsbescheideDTO,
} from '../../core/aufhebungsbescheide-dto';
import { AufhebungsbescheideService } from '../../core/aufhebungsbescheide.service';
import { EmpfaengerDTO } from '../../core/empfaenger-dto';
import {
  ErgebnisDTO,
  hasErgebnisse,
  newErgebnisDTO,
} from '../../core/ergebnis-dto';
import { newFachdatenDTO } from '../../core/fachdaten-dto';
import { XMLtoDTOMapperService } from '../../core/xml-to-dto-mapper.service';

@Component({
  selector: 'rvp-bescheid-dashboard',
  templateUrl: './bescheid-dashboard.component.html',
  styleUrls: ['./bescheid-dashboard.component.scss'],
})
export class BescheidDashboardComponent implements OnInit {
  aufhebungsbescheideDTO: AufhebungsbescheideDTO = newAufhebungsbescheideDTO();
  ergebnisDTO: ErgebnisDTO = newErgebnisDTO();
  aufhebungsbescheideGroup: FormRecord = new FormRecord({});

  constructor(
    private xmlToDTOMapper: XMLtoDTOMapperService,
    private aufhebungsbescheideService: AufhebungsbescheideService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/example-personalisierung.xml', {
        responseType: 'text',
      })
      .subscribe((personalisierungenXML: string) => {
        this.aufhebungsbescheideDTO.personalisierungAnwender =
          this.xmlToDTOMapper.mapXMLtoPersonalisierungDTOList(
            personalisierungenXML
          )[0];
      });
  }

  aufhebungsbescheideTitle(): string {
    return this.aufhebungsbescheideDTO.aufhebungsbescheide.length > 0
      ? `Aufhebungsbescheide (${this.aufhebungsbescheideDTO.aufhebungsbescheide.length})`
      : `Aufhebungsbescheide`;
  }

  ergebnisseTitle(): string {
    return this.ergebnisDTO.ergebnisse.length > 0
      ? `Erzeugte Dokumente (${this.ergebnisDTO.ergebnisse.length})`
      : `Erzeugte Dokumente`;
  }

  getFormControlNameByKundennummerAndFachdatenIndex(
    kundennummer: string,
    fachdatenIndex: number,
    nameSuffix: string
  ): string {
    return controlNameByKundennummerAndFachdatenIndex(
      kundennummer,
      fachdatenIndex,
      nameSuffix
    );
  }

  hasErgebnisse(): boolean {
    return hasErgebnisse(this.ergebnisDTO);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDatenquelleSelected($event: any): void {
    const file: File = $event?.target?.files[0];
    const reader: FileReader = new FileReader();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reader.onloadend = (e) => {
      const datenquelleXML: string = reader.result as string;
      this.mapXMLToAufhebungsbescheide(datenquelleXML);
    };
    reader.readAsText(file);
  }

  onFachdatensatzAdded(aufhebungsbescheidDTO: AufhebungsbescheidDTO): void {
    const controlsToAdd: ControlToAdd[] = requiredControlsToAdd(
      aufhebungsbescheidDTO.empfaengerDTO.personKundennummer!,
      aufhebungsbescheidDTO.fachdatenDTOList.length,
      'beginnErstattungszeitraum',
      'endeErstattstungszeitraum',
      'leistungsart',
      'begründungAufhebung',
      'vertragsgegenstandsnummer',
      'leistungssatz'
    );
    controlsToAdd.forEach((controlToAdd: ControlToAdd) => {
      this.aufhebungsbescheideGroup.addControl(
        controlToAdd.name,
        controlToAdd.control
      );
    });
    aufhebungsbescheidDTO.fachdatenDTOList.push(newFachdatenDTO());
  }

  onSubmitForAufhebungsbescheide(
    aufhebungsbescheideDTO: AufhebungsbescheideDTO
  ): void {
    console.log(aufhebungsbescheideDTO);
    const postHoleDokumente$ =
      this.aufhebungsbescheideService.postHoleDokumente(aufhebungsbescheideDTO);
    postHoleDokumente$.subscribe((next: ErgebnisDTO) => {
      console.log(next);
      this.ergebnisDTO = next;
    });
  }

  onPDFDownloaded(docGUID: string | null): void {
    if (docGUID) {
      const getDokumentDownload$ =
        this.aufhebungsbescheideService.getDokumentDownload(docGUID);
      getDokumentDownload$.subscribe((next: File) => {
        console.log(next);
      });
    }
  }

  private mapXMLToAufhebungsbescheide(datenquelleXML: string): void {
    const empfaengerDTOList: EmpfaengerDTO[] =
      this.xmlToDTOMapper.mapXMLtoEmpfaengerDTOList(datenquelleXML);
    for (const empfaengerDTO of empfaengerDTOList) {
      const aufhebungsbescheid: AufhebungsbescheidDTO =
        newAufhebungsbescheidDTO();
      aufhebungsbescheid.empfaengerDTO = empfaengerDTO;
      for (let i = 0; i < aufhebungsbescheid.fachdatenDTOList.length; i++) {
        const controlsToAdd: ControlToAdd[] = requiredControlsToAdd(
          aufhebungsbescheid.empfaengerDTO.personKundennummer!,
          i,
          'beginnErstattungszeitraum',
          'endeErstattstungszeitraum',
          'leistungsart',
          'begründungAufhebung',
          'vertragsgegenstandsnummer',
          'leistungssatz'
        );
        controlsToAdd.forEach((controlToAdd: ControlToAdd) => {
          this.aufhebungsbescheideGroup.addControl(
            controlToAdd.name,
            controlToAdd.control
          );
        });
      }
      this.aufhebungsbescheideDTO.aufhebungsbescheide.push(aufhebungsbescheid);
    }
  }
}

export interface ControlToAdd {
  name: string;
  control: FormControl;
}

export function controlNameByKundennummerAndFachdatenIndex(
  kundennummer: string,
  fachdatenIndex: number,
  nameSuffix: string
): string {
  return `${kundennummer}-fachdatensatz-${fachdatenIndex}-${nameSuffix}`;
}

export function newRequiredControl(
  kundennummer: string,
  fachdatenIndex: number,
  nameSuffix: string
): ControlToAdd {
  return {
    name: controlNameByKundennummerAndFachdatenIndex(
      kundennummer,
      fachdatenIndex,
      nameSuffix
    ),
    control: new FormControl('', Validators.required),
  };
}

export function requiredControlsToAdd(
  kundennummer: string,
  fachdatenIndex: number,
  ...nameSuffixes: string[]
): ControlToAdd[] {
  const controlsToAdd: ControlToAdd[] = [];
  for (const nameSuffix of nameSuffixes) {
    controlsToAdd.push(
      newRequiredControl(kundennummer, fachdatenIndex, nameSuffix)
    );
  }
  return controlsToAdd;
}
