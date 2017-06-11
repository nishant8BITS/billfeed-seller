import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrenciesPage } from './currencies';

@NgModule({
  declarations: [
    CurrenciesPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrenciesPage),
  ],
  exports: [
    CurrenciesPage
  ]
})
export class CurrenciesPageModule {}
