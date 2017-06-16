import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController,ToastController } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import {InventoryServiceProvider} from '../../providers/inventory-service/inventory-service'
import { HomePage } from '../home/home';
import {InventoryItem} from './item.ts';
import { StockinPage } from '../stockin/stockin';

/**
 * Generated class for the StockinitemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-stockinitem',
  templateUrl: 'stockinitem.html',
})
export class StockinitemPage {

  public loading: boolean;
  public itemDetail:any;
  public qty: number;

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

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private _barcodeScanner: BarcodeScanner, 
    private _inventoryServiceProvider: InventoryServiceProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController) {
  	  this.itemDetail = new InventoryItem();
  	  this.qty = 1;

  }

  ionViewDidEnter(){
    this.scan();
  }

  ionViewDidLoad() {}

  public scan() {
    this.loading = true;
    this._barcodeScanner.scan(this.scannerOption).then((barcodeData) => {
      if (barcodeData.cancelled) {
        this.loading = false;
        this._nav.setRoot(HomePage);
        return false;
      }
      if(barcodeData && barcodeData.text){
      	this.getItemDetails(barcodeData.text);
      }
    }, (err) => {
      this.loading = false;
    });
  }


  public getItemDetails(eanNo){
    let loader = this.loadingCtrl.create({
      content: "Finding item ...",
      spinner: 'circles'
    });
    loader.present();

    this._inventoryServiceProvider.getItemByEANno(eanNo).then((data) =>{
    	if(!!data){
    		this.itemDetail = data;
    	}else{
    		this._nav.setRoot(StockinPage);
    	}
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


  public updateItemToInventory(){
    let loader = this.loadingCtrl.create({
      content: "Please wait....",
      spinner: 'circles'
    });
    loader.present();

    this.qty = this.qty || 0;
    this.itemDetail["qty"] = this.itemDetail["qty"] || 0;
    this.itemDetail["qty"] = this.itemDetail["qty"] + this.qty;

    this._inventoryServiceProvider.updateItemToInventory(this.itemDetail).then((data) =>{
      loader.dismiss();
      this._nav.setRoot(HomePage);
      this.showAlert("Success", "Item stocked in inventory successfully.");
    },(err) => {
      this.showAlert("Error", "Sorry but we enconter with some issue. Please try again.");
      loader.dismiss();
    });
  }

  public cancel(){
    this._nav.setRoot(HomePage);
  }

}
