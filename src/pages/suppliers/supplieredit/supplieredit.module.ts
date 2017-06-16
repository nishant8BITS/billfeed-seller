import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliereditPage } from './supplieredit';

@NgModule({
  declarations: [
    SuppliereditPage,
  ],
  imports: [
    IonicPageModule.forChild(SuppliereditPage),
  ],
  exports: [
    SuppliereditPage
  ]
})
export class SuppliereditPageModule {}
