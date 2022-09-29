import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarLcmtoPageRoutingModule } from './registrar-lcmto-routing.module';

import { RegistrarLcmtoPage } from './registrar-lcmto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarLcmtoPageRoutingModule
  ],
  declarations: [RegistrarLcmtoPage]
})
export class RegistrarLcmtoPageModule {}
