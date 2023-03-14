import { EmpfaengerDTO, newEmpfaengerDTO } from './empfaenger-dto';
import { FachdatenDTO, newFachdatenDTO } from './fachdaten-dto';

export interface AufhebungsbescheidDTO {
  empfaengerDTO: EmpfaengerDTO;
  fachdatenDTOList: FachdatenDTO[];
}

export function newAufhebungsbescheidDTO(): AufhebungsbescheidDTO {
  return {
    empfaengerDTO: newEmpfaengerDTO(),
    fachdatenDTOList: [newFachdatenDTO()],
  };
}
