import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RgistrarLcmntoPageRoutingModule } from './rgistrar-lcmnto-routing.module';

import { RgistrarLcmntoPage } from './rgistrar-lcmnto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RgistrarLcmntoPageRoutingModule
  ],
  declarations: [RgistrarLcmntoPage]
})
export class RgistrarLcmntoPageModule {}
