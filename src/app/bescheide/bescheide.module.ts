import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { BescheidDashboardComponent } from './bescheid-dashboard/bescheid-dashboard.component';
import { BescheideRoutingModule } from './bescheide-routing.module';

@NgModule({
  declarations: [BescheidDashboardComponent],
  imports: [CommonModule, CoreModule, BescheideRoutingModule],
})
export class BescheideModule {}
