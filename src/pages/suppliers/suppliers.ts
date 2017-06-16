import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ModalController } from 'ionic-angular';
import { SuppliereditPage} from './supplieredit/supplieredit';
import {SupplierdetailsPage} from "./supplierdetails/supplierdetails";
import {SupplierProvider} from '../../providers/supplier/supplier';
import {SupplierFactory} from '../SupplierFactory';


@Component({
  selector: 'page-suppliers',
  templateUrl: 'suppliers.html',
})
export class SuppliersPage {

  public suppliers: any; 
  public suppliersList: any;

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
        this.suppliersList = suppliers;
        loader.dismiss();
      },(err) => {
        loader.dismiss();
      });
  }

  viewSupplierDetail(supplier){
    this.navCtrl.push(SupplierdetailsPage, {supplierDetails: supplier});
  }

  /*
    Search Supplier based on Supplier Name
   */
  searchSupplier(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.suppliers = this.suppliers.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.suppliers = this.suppliersList;
    }
  }

}
