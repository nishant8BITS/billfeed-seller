import { Component } from '@angular/core';

import {NavController, Platform, NavParams, ViewController,App } from 'ionic-angular';
import {SellitemPage} from '../../sellitem/sellitem';


@Component({
  templateUrl: './paymentoption.html'
})

export class PaymentOptionPage {
  public totalPayment: any;
  public showSuccess = false;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App
  ) {
     this.totalPayment = this.params.get('totalPayment');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  public payVia(){
    this.showSuccess = true;
  }

  public navigate(page){
    this.viewCtrl.dismiss().then(() => {
      this.app.getRootNav().setRoot(SellitemPage);
    });
  }
}
