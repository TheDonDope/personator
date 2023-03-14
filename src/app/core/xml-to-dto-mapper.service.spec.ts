import { TestBed } from '@angular/core/testing';

import { XMLtoDTOMapperService } from './xml-to-dto-mapper.service';

describe('XMLtoDTOMapperService', () => {
  let service: XMLtoDTOMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XMLtoDTOMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
