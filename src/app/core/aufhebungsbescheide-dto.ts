import { AufhebungsbescheidDTO } from './aufhebungsbescheid-dto';
import {
  newPersonalisierungDTO,
  PersonalisierungDTO,
} from './personalisierung-dto';

export interface AufhebungsbescheideDTO {
  aufhebungsbescheide: AufhebungsbescheidDTO[];
  personalisierungAnwender: PersonalisierungDTO;
}

export function newAufhebungsbescheideDTO(): AufhebungsbescheideDTO {
  return {
    aufhebungsbescheide: [],
    personalisierungAnwender: newPersonalisierungDTO(),
  };
}
