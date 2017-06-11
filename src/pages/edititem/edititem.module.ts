import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdititemPage } from './edititem';

@NgModule({
  declarations: [
    EdititemPage,
  ],
  imports: [
    IonicPageModule.forChild(EdititemPage),
  ],
  exports: [
    EdititemPage
  ]
})
export class EdititemPageModule {}
