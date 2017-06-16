import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {SuppliereditPageModule} from './supplieredit/supplieredit.module';
import { SuppliersPage } from './suppliers';

@NgModule({
  declarations: [
    SuppliersPage
  ],
  imports: [
  	SuppliereditPageModule,
    IonicPageModule.forChild(SuppliersPage),
  ],
  exports: [
    SuppliersPage
  ]
})
export class SuppliersPageModule {}
