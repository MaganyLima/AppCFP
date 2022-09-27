import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RgistrarLcmntoPage } from './rgistrar-lcmnto.page';

const routes: Routes = [
  {
    path: '',
    component: RgistrarLcmntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RgistrarLcmntoPageRoutingModule {}
