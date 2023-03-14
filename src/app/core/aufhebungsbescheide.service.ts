import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AufhebungsbescheideDTO } from './aufhebungsbescheide-dto';
import { ErgebnisDTO } from './ergebnis-dto';

@Injectable({
  providedIn: 'root',
})
export class AufhebungsbescheideService {
  constructor(private httpClient: HttpClient) {}

  getDokumentDownload(docGUID: string): Observable<File> {
    return this.httpClient.get<File>(`/DokumentDownload?docGUID=${docGUID}`);
  }

  postHoleDokumente(
    aufhebungsbescheideDTO: AufhebungsbescheideDTO
  ): Observable<ErgebnisDTO> {
    return this.httpClient.post<ErgebnisDTO>('/HoleDokumente', {
      Aufhebungsbescheide: aufhebungsbescheideDTO.aufhebungsbescheide,
      PersonalisierungAnwender: aufhebungsbescheideDTO.personalisierungAnwender,
    });
  }
}
