import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDespesaPage } from './add-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: AddDespesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDespesaPageRoutingModule {}
