import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReceitaPageRoutingModule } from './add-receita-routing.module';

import { AddReceitaPage } from './add-receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReceitaPageRoutingModule
  ],
  declarations: [AddReceitaPage]
})
export class AddReceitaPageModule {}
