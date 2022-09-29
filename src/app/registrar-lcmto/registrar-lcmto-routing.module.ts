import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarLcmtoPage } from './registrar-lcmto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarLcmtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarLcmtoPageRoutingModule {}
