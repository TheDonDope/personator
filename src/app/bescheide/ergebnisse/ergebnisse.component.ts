import { Component, Input } from '@angular/core';
import { AufhebungsbescheideService } from '../../core/aufhebungsbescheide.service';
import { Ergebnis } from '../../core/ergebnis';

@Component({
  selector: 'rvp-ergebnisse',
  templateUrl: './ergebnisse.component.html',
  styleUrls: ['./ergebnisse.component.scss'],
})
export class ErgebnisseComponent {
  displayedColumns: string[] = [
    'PersonName',
    'Leistungsart',
    'Zeitraum',
    'DocGUID',
    'DownloadPDF',
  ];

  @Input()
  ergebnisse: Ergebnis[] = [];

  constructor(private aufhebungsbescheideService: AufhebungsbescheideService) {}

  onPDFDownloaded(docGUID: string | null): void {
    if (docGUID) {
      const getDokumentDownload$ =
        this.aufhebungsbescheideService.getDokumentDownload(docGUID);
      getDokumentDownload$.subscribe((next: File) => {
        console.log(next);
      });
    }
  }
}
