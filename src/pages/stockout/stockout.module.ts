import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockoutPage } from './stockout';

@NgModule({
  declarations: [
    StockoutPage,
  ],
  imports: [
    IonicPageModule.forChild(StockoutPage),
  ],
  exports: [
    StockoutPage
  ]
})
export class StockoutPageModule {}
