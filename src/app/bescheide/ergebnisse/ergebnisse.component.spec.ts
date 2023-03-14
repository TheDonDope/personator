import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';

import { ErgebnisseComponent } from './ergebnisse.component';

describe('ErgebnisseComponent', () => {
  let component: ErgebnisseComponent;
  let fixture: ComponentFixture<ErgebnisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ErgebnisseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErgebnisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
