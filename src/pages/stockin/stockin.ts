import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ItemDetailPage } from "../itemdetail/itemdetail";
import {InventoryItem} from './item.ts';
import {InventoryServiceProvider} from '../../providers/inventory-service/inventory-service'


@Component({
  selector: 'page-scan',
  templateUrl: 'stockin.html'
})
export class StockinPage {
  public scannedText: string;
  public buttonText: string;
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
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loading = false;
  }

  public scanQR() {
   
    this.loading = true;

    this._barcodeScanner.scan(this.scannerOption).then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
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
      this.showAlert("Success", "Item added in inventory successfully.");
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
      this.itemDetail.rate = '';
      this.itemDetail.stock_on_hand = '';
  }
}
