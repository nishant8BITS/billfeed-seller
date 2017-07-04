import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellitemPage } from './sellitem';
import {PaymentOptionPage} from './paymentoption/paymentoption';

@NgModule({
  declarations: [
    SellitemPage,
    PaymentOptionPage
  ],
  imports: [
    IonicPageModule.forChild(SellitemPage),
  ],
  exports: [
    SellitemPage
  ],
  entryComponents: [
   PaymentOptionPage
  ],
})
export class SellitemPageModule {}
