import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoredetailsPage } from './storedetails';

@NgModule({
  declarations: [
    StoredetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoredetailsPage),
  ],
  exports: [
    StoredetailsPage
  ]
})
export class StoredetailsPageModule {}
