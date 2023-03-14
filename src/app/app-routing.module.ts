import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bescheide',
    loadChildren: () =>
      import('./bescheide/bescheide.module').then(
        (module) => module.BescheideModule
      ),
  },
  {
    path: '',
    redirectTo: '/bescheide',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
