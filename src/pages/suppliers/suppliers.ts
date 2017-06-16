import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ModalController } from 'ionic-angular';
import { SuppliereditPage} from './supplieredit/supplieredit';
import {SupplierProvider} from '../../providers/supplier/supplier';
import {SupplierFactory} from '../SupplierFactory';


@Component({
  selector: 'page-suppliers',
  templateUrl: 'suppliers.html',
})
export class SuppliersPage {

  public suppliers: any; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public supplierProvider: SupplierProvider,
              public loadingCtrl: LoadingController) {

    this.suppliers= [];
    this.getSuppliers();
  }

  ionViewDidLoad() {
    
  }

  addNewItem(){
  	this.navCtrl.push(SuppliereditPage);
  }

  getSuppliers(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: 'circles'
    });
    loader.present();


    this.supplierProvider.getSuppliers().then((suppliers) => {
        this.suppliers = suppliers;
        loader.dismiss();
      },(err) => {
        loader.dismiss();
      });
  }

  viewSupplierDetail(){

  }
}
