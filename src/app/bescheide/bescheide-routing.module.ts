import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BescheidDashboardComponent } from './bescheid-dashboard/bescheid-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BescheidDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BescheideRoutingModule {}
