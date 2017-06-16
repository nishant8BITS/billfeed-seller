import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SupplierFactory} from '../SupplierFactory';
import {SuppliereditPage} from '../supplieredit/supplieredit';


/**
 * Generated class for the SupplierdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-supplierdetails',
  templateUrl: 'supplierdetails.html',
})
export class SupplierdetailsPage {

  public supplier: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  	this.supplier = this.navParams.get("supplierDetails");
  }

  editSupplier(){
  	this.navCtrl.push(SuppliereditPage, {"actionType": "edit", supplierDetails: this.supplier});
  }

  deleteSupplier(){

  }

}
