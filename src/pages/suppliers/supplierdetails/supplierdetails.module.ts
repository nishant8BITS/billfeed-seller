import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplierdetailsPage } from './supplierdetails';

@NgModule({
  declarations: [
    SupplierdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SupplierdetailsPage),
  ],
  exports: [
    SupplierdetailsPage
  ]
})
export class SupplierdetailsPageModule {}
