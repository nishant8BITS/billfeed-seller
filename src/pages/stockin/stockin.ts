import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController,ToastController } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ItemDetailPage } from "../itemdetail/itemdetail";
import {InventoryItem} from './item.ts';
import {InventoryServiceProvider} from '../../providers/inventory-service/inventory-service'
import { HomePage } from '../home/home';

@Component({
  selector: 'page-scan',
  templateUrl: 'stockin.html'
})
export class StockinPage {
  public loading: boolean;

  public scannerOption = {
          preferFrontCamera : false,
          showFlipCameraButton : true, 
          showTorchButton : true, 
          torchOn: false,
          prompt : "Place a barcode inside the scan area",
          disableAnimations : true,
          disableSuccessBeep: false 
  }

  public unitSelectOptions = {
     title: 'Select Unit'
  }

  public itemDetail = new InventoryItem();

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private _barcodeScanner: BarcodeScanner, 
    private _inventoryServiceProvider: InventoryServiceProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.loading = false;
  }

  public scan() {
   
    this.loading = true;

    this._barcodeScanner.scan(this.scannerOption).then((barcodeData) => {
      if (barcodeData.cancelled) {
        this.loading = false;
        return false;
      }
      this.goToResult(barcodeData);
    }, (err) => {
      console.log(err);
      this.loading = false;
    });
  }

  private goToResult(barcodeData) {
    console.log(barcodeData);
    this.itemDetail["ean"] = barcodeData.text;
    this.loading = false;
  }


  public saveItemToInventory(){

    if(!this.itemDetail.name || !this.itemDetail.name.trim()){
      this.showAlert('Error!', 'Please provide item name.');
      return false;
    }

    let loader = this.loadingCtrl.create({
      content: "Saving item ...",
      spinner: 'circles'
    });
    loader.present();

    this._inventoryServiceProvider.saveItemToInventory(this.itemDetail).then((data) =>{
      loader.dismiss();

      let toast = this.toastCtrl.create({
        message: 'Item added in inventory successfully.',
        duration: 3000
      });
      toast.present();
      this.resetitemForm();
    },(err) => {
      this.showAlert("Error", "Sorry but we enconter with some issue. Please try again.");
      loader.dismiss();
    });
  }

  private showAlert(title, text){
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: text,
          buttons: ['OK']
        });
        alert.present();
  }

  private resetitemForm(){
      this.itemDetail.name = '';
      this.itemDetail.brand = '';
      this.itemDetail.ean = '';
      this.itemDetail.unit = '';
      this.itemDetail.purchase_rate = '';
      this.itemDetail.selling_rate = '';
      this.itemDetail.qty = '';
      this.itemDetail.description = '';
      this.itemDetail.supplier = '';
      this.itemDetail.category = '';
      this.itemDetail.hsn = '';
  }

  public cancel(){
    this._nav.setRoot(HomePage);
  }
}
