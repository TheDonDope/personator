import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../../core/core.module';
import { BescheidDashboardComponent } from './bescheid-dashboard.component';

describe('BescheidDashboardComponent', () => {
  let component: BescheidDashboardComponent;
  let fixture: ComponentFixture<BescheidDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BescheidDashboardComponent],
      imports: [NoopAnimationsModule, CoreModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BescheidDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
