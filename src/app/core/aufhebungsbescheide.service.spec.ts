import { TestBed } from '@angular/core/testing';

import { CoreModule } from './core.module';
import { AufhebungsbescheideService } from './aufhebungsbescheide.service';

describe('AufhebungsbescheideService', () => {
  let service: AufhebungsbescheideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
    service = TestBed.inject(AufhebungsbescheideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
