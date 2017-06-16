import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {SuppliereditPageModule} from './supplieredit/supplieredit.module';
import {SupplierdetailsPageModule} from "./supplierdetails/supplierdetails.module";
import { SuppliersPage } from './suppliers';

@NgModule({
  declarations: [
    SuppliersPage
  ],
  imports: [
  	SuppliereditPageModule,
    SupplierdetailsPageModule,
    IonicPageModule.forChild(SuppliersPage),
  ],
  exports: [
    SuppliersPage
  ]
})
export class SuppliersPageModule {}
