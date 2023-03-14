import { Component, Input } from '@angular/core';
import { PersonalisierungDTO } from '../../core/personalisierung-dto';

@Component({
  selector: 'rvp-personalisierung',
  templateUrl: './personalisierung.component.html',
  styleUrls: ['./personalisierung.component.scss'],
})
export class PersonalisierungComponent {
  @Input()
  personalisierungAnwender!: PersonalisierungDTO;

  @Input()
  callback!: (xml: string) => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDatenquelleSelected($event: any): void {
    const file: File = $event?.target?.files[0];
    const reader: FileReader = new FileReader();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reader.onloadend = (e) => {
      const datenquelleXML: string = reader.result as string;
      this.callback(datenquelleXML);
    };
    reader.readAsText(file);
  }
}
