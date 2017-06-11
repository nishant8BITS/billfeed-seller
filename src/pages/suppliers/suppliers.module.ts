import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliersPage } from './suppliers';

@NgModule({
  declarations: [
    SuppliersPage,
  ],
  imports: [
    IonicPageModule.forChild(SuppliersPage),
  ],
  exports: [
    SuppliersPage
  ]
})
export class SuppliersPageModule {}
