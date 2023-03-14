import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  AufhebungsbescheidDTO,
  newAufhebungsbescheidDTO,
} from '../../core/aufhebungsbescheid-dto';
import { EmpfaengerDTO } from '../../core/empfaenger-dto';
import { PersonalisierungDTO } from '../../core/personalisierung-dto';
import { XMLtoDTOMapperService } from '../../core/xml-to-dto-mapper.service';

@Component({
  selector: 'rvp-bescheid-dashboard',
  templateUrl: './bescheid-dashboard.component.html',
  styleUrls: ['./bescheid-dashboard.component.scss'],
})
export class BescheidDashboardComponent implements OnInit {
  aufhebungsbescheidDTOList: AufhebungsbescheidDTO[] = [];
  empfaengerDTOList: EmpfaengerDTO[] = [];
  personalisierungDTOList: PersonalisierungDTO[] = [];
  empfaengerForms: Map<string, FormGroup> = new Map();
  panelOpenState = false;

  constructor(
    private xmlToDTOMapper: XMLtoDTOMapperService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/example-personalisierung.xml', {
        responseType: 'text',
      })
      .subscribe((personalisierungenXML: string) => {
        this.personalisierungDTOList =
          this.xmlToDTOMapper.mapXMLtoPersonalisierungDTOList(
            personalisierungenXML
          );
      });
    this.panelOpenState = true;
  }

  aufhebungsbescheideTitle(): string {
    return this.aufhebungsbescheidDTOList.length > 0
      ? `Aufhebungsbescheide (${this.aufhebungsbescheidDTOList.length})`
      : `Aufhebungsbescheide`;
  }

  getFormGroupByKundennummer(kundennummer: string): FormGroup {
    return this.empfaengerForms.get(kundennummer)!;
  }

  getSumByKundennummer(kundennummer: string): number {
    let anzahlTage = 0;
    let result = 0;
    const von = this.getFormGroupByKundennummer(kundennummer).get(
      'beginnErstattungszeitraum'
    )?.value;
    const bis = this.getFormGroupByKundennummer(kundennummer).get(
      'endeErstattungszeitraum'
    )?.value;
    const leistungssatz = this.getFormGroupByKundennummer(kundennummer).get(
      'leistungssatz'
    )?.value as number;

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    if (von && bis && leistungssatz) {
      anzahlTage = Math.round(Math.abs((bis - von) / oneDay));

      result = anzahlTage * leistungssatz;
    }
    return result;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDatenquelleSelected($event: any) {
    const file: File = $event?.target?.files[0];
    const reader: FileReader = new FileReader();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reader.onloadend = (e) => {
      const datenquelleXML: string = reader.result as string;
      this.empfaengerDTOList =
        this.xmlToDTOMapper.mapXMLtoEmpfaengerDTOList(datenquelleXML);
      this.mapToAufhebungsbescheide();
      this.buildForms();
    };
    reader.readAsText(file);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDownloadPDFSelected($event: any): void {
    console.log($event);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onShowPDFSelected($event: any): void {
    console.log($event);
  }

  onSubmitForAufhebungsbescheid(
    aufhebungsbescheidDTO: AufhebungsbescheidDTO
  ): void {
    console.log(aufhebungsbescheidDTO);
  }

  onSubmitForKundennummer(kundennummer: string) {
    console.log(this.getFormGroupByKundennummer(kundennummer).value);
  }

  private mapToAufhebungsbescheide(): void {
    for (const empfaengerDTO of this.empfaengerDTOList) {
      const aufhebungsbescheid: AufhebungsbescheidDTO =
        newAufhebungsbescheidDTO();
      aufhebungsbescheid.empfaengerDTO = empfaengerDTO;
      this.aufhebungsbescheidDTOList.push(aufhebungsbescheid);
    }
  }

  private buildForms(): void {
    for (const empfaengerDTO of this.empfaengerDTOList) {
      const fields = {
        beginnErstattungszeitraum: new FormControl('', Validators.required),
        endeErstattstungszeitraum: new FormControl('', Validators.required),
        leistungsart: new FormControl('', Validators.required),
        begründungAufhebung: new FormControl('', Validators.required),
        vertragsgegenstandsnummer: new FormControl('', Validators.required),
        leistungssatz: new FormControl('', Validators.required),
      };

      const group: FormGroup = new FormGroup(fields);
      if (empfaengerDTO?.personKundennummer) {
        this.empfaengerForms.set(empfaengerDTO.personKundennummer, group);
      }
    }
  }
}
