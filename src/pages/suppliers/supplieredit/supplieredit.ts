import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController,ToastController } from 'ionic-angular';
import {SupplierFactory} from '../SupplierFactory';
import {SupplierProvider} from '../../../providers/supplier/supplier';


@Component({
  selector: 'page-supplieredit',
  templateUrl: 'supplieredit.html',
})


export class SuppliereditPage {

  public supplier: any;
  public buttonText: string;
  public actionType:string;

  constructor(
  			public navCtrl: NavController, 
  			public navParams: NavParams,
  	    	public supplierProvider: SupplierProvider,
    		public loadingCtrl: LoadingController,
    		public alertCtrl: AlertController, 
    		public toastCtrl: ToastController) {

  	this.supplier = new SupplierFactory();

  	if(this.navParams.get('actionType') === 'edit'){
  		this.actionType = "edit";
  		this.buttonText = "Update";
  	}else{
  		this.actionType = "addnew";
  		this.buttonText = "Save"
  	}
  }

  saveSupplier(){

  	if(!this.supplier.name || !this.supplier.name.trim()){
      this.showAlert('Error!', 'Please provide supplier name.');
      return false;
    }

    let loader = this.loadingCtrl.create({
      content: "Saving item ...",
      spinner: 'circles'
    });
    loader.present();

  	this.supplierProvider.saveSupplier(this.supplier).then((data)=>{
      
      loader.dismiss();

      let toast = this.toastCtrl.create({
        message: 'supplier added successfully.',
        duration: 3000
      });
      toast.present();
      this.resetitemForm();

  	},(err) => {

  	});
  }


  showAlert(title, text){
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: text,
          buttons: ['OK']
        });
        alert.present();
  }

  resetitemForm(){
  	this.supplier = new SupplierFactory();
  }

  cancel(){
  	this.navCtrl.pop();
  }
}
