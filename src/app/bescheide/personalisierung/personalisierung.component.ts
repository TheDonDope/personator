import { Component, Input } from '@angular/core';
import { PersonalisierungDTO } from '../../core/personalisierung-dto';

@Component({
  selector: 'rvp-personalisierung',
  templateUrl: './personalisierung.component.html',
  styleUrls: ['./personalisierung.component.scss'],
})
export class PersonalisierungComponent {
  @Input()
  personalisierungDTO!: PersonalisierungDTO;
}
