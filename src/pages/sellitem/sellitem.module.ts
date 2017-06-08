import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellitemPage } from './sellitem';

@NgModule({
  declarations: [
    SellitemPage,
  ],
  imports: [
    IonicPageModule.forChild(SellitemPage),
  ],
  exports: [
    SellitemPage
  ]
})
export class SellitemPageModule {}
