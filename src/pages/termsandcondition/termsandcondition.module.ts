import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsandconditionPage } from './termsandcondition';

@NgModule({
  declarations: [
    TermsandconditionPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsandconditionPage),
  ],
  exports: [
    TermsandconditionPage
  ]
})
export class TermsandconditionPageModule {}
