import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import {PaymentOptionPage} from './paymentoption/paymentoption';

/**
 * Generated class for the SellitemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()   
@Component({
  selector: 'page-sellitem',
  templateUrl: 'sellitem.html',
})
export class SellitemPage {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellitemPage');
  }

  showPaymentOption(){
  	debugger;
  	let modal = this.modalCtrl.create(PaymentOptionPage);
    modal.present();
  }

}
