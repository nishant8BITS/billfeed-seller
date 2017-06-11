import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import {InventoryServiceProvider} from '../../providers/inventory-service/inventory-service';
import { InventoryListPage } from '../inventory/inventory';


@Component({
  selector: 'page-edititem',
  templateUrl: 'edititem.html',
})
export class EdititemPage {
	public itemDetail: any;
	public loading: boolean;
 	public unitSelectOptions = {
     	title: 'Select Unit'
  	}

	public scannerOption = {
	      preferFrontCamera : false,
	      showFlipCameraButton : true, 
	      showTorchButton : true, 
	      torchOn: false,
	      prompt : "Place a barcode inside the scan area",
	      disableAnimations : true,
	      disableSuccessBeep: false 
	}

  constructor(  private _nav: NavController,
			    private _navParams: NavParams,
			    private _barcodeScanner: BarcodeScanner, 
			    private _inventoryServiceProvider: InventoryServiceProvider,
			    public loadingCtrl: LoadingController,
			    public alertCtrl: AlertController) {
  	 this.itemDetail = this._navParams.get('itemDetail');
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

  public updateItemToInventory(){
    if(!this.itemDetail.name || !this.itemDetail.name.trim()){
      this.showAlert('Error!', 'Please provide item name.');
      return false;
    }

    let loader = this.loadingCtrl.create({
      content: "Updating item ...",
      spinner: 'circles'
    });
    loader.present();

    this._inventoryServiceProvider.updateItemToInventory(this.itemDetail).then((data) =>{
      loader.dismiss();
      this._nav.push(InventoryListPage);
      this.showAlert("Success", "Item Updated in inventory successfully.");
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

  	public cancel(){
  		this._nav.pop();
  	}

}
