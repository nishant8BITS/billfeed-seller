import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellitemPage } from './sellitem';
import {PaymentOptionPage} from './paymentoption/paymentoption';
import {ItemDetailsPage} from './itemdetails/itemdetails';


@NgModule({
  declarations: [
    SellitemPage,
    PaymentOptionPage,
    ItemDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(SellitemPage),
  ],
  exports: [
    SellitemPage
  ],
  entryComponents: [
   PaymentOptionPage,
   ItemDetailsPage
  ],
})
export class SellitemPageModule {}
