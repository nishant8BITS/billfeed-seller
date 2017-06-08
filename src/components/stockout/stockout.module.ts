import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockoutComponent } from './stockout';

@NgModule({
  declarations: [
    StockoutComponent,
  ],
  imports: [
    IonicPageModule.forChild(StockoutComponent),
  ],
  exports: [
    StockoutComponent
  ]
})
export class StockoutComponentModule {}
