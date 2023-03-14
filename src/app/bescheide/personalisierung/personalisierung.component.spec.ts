import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { newPersonalisierungDTO } from '../../core/personalisierung-dto';
import { PersonalisierungComponent } from './personalisierung.component';

describe('PersonalisierungComponent', () => {
  let component: PersonalisierungComponent;
  let fixture: ComponentFixture<PersonalisierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [PersonalisierungComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalisierungComponent);
    component = fixture.componentInstance;
    component.personalisierungDTO = newPersonalisierungDTO();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
