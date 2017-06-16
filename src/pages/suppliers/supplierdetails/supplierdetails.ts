import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController,AlertController,ToastController} from 'ionic-angular';
import {SupplierFactory} from '../SupplierFactory';
import {SuppliereditPage} from '../supplieredit/supplieredit';
import {SupplierProvider} from '../../../providers/supplier/supplier';
import { SuppliersPage } from '../suppliers';

@Component({
  selector: 'page-supplierdetails',
  templateUrl: 'supplierdetails.html',
})
export class SupplierdetailsPage {

  public supplier: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public supplierProvider: SupplierProvider,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController, 
        public toastCtrl: ToastController) {
  	this.supplier = this.navParams.get("supplierDetails");
  }

  editSupplier(){
  	this.navCtrl.push(SuppliereditPage, {"actionType": "edit", supplierDetails: this.supplier});
  }


  deleteSupplier(){
    this.showDeleteConfirm(this.supplier);
  }

   private showAlert(title, text){
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: ['OK']
      });
      alert.present();
   }


  showDeleteConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Warning',
      message: 'Are you sure you want to delete this supplier ? ',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            confirm.dismiss();
            return false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
           this.confirmDelete(item);
          }
        }
      ]
    });
    confirm.present();
  }


  private confirmDelete(item){
   let loader = this.loadingCtrl.create({
      spinner: 'circles'
    });
    loader.present();

    this.supplierProvider.deleteSupplier(item._id).then((data) =>{
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: 'supplier deleted successfully.',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot(SuppliersPage);
    },(err) => {
      this.showAlert("Error", "Sorry but we enconter with some issue. Please try again.");
      loader.dismiss();
    });
  }



}
