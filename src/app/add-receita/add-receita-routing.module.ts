import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReceitaPage } from './add-receita.page';

const routes: Routes = [
  {
    path: '',
    component: AddReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReceitaPageRoutingModule {}
