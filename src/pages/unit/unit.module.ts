import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitPage } from './unit';

@NgModule({
  declarations: [
    UnitPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitPage),
  ],
  exports: [
    UnitPage
  ]
})
export class UnitPageModule {}
