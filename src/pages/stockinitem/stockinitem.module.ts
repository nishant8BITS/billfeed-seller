import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockinitemPage } from './stockinitem';

@NgModule({
  declarations: [
    StockinitemPage,
  ],
  imports: [
    IonicPageModule.forChild(StockinitemPage),
  ],
  exports: [
    StockinitemPage
  ]
})
export class StockinitemPageModule {}
