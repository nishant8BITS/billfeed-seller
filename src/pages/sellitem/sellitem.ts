import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController,ModalController } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import {InventoryServiceProvider} from '../../providers/inventory-service/inventory-service'
import {PaymentOptionPage} from './paymentoption/paymentoption';
import {ItemDetailsPage} from './itemdetails/itemdetails';

 
@Component({
  selector: 'page-sellitem',
  templateUrl: 'sellitem.html',
})
export class SellitemPage {

  public itemDetail:any;
  public items = new Array();
  public subTotal = 0;
  public discount = 0;
  public gstTax = 0;
  public finalPayableAmount = 0;

  public currentGSTPercent = 10;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController,
          private _barcodeScanner: BarcodeScanner,
          public loadingCtrl: LoadingController,
          public alertCtrl: AlertController,
          private _inventoryServiceProvider: InventoryServiceProvider) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellitemPage');
  }

  ionViewDidEnter(){
    this.reset();
  }

  public reset(){
    this.subTotal = 0;
    this.discount = 0;
    this.gstTax = 0;
    this.finalPayableAmount = 0;
  }

  showPaymentOption(){
  	let modal = this.modalCtrl.create(PaymentOptionPage, { totalPayment: this.finalPayableAmount });
    modal.present();
  }

  showItemDetails(itemDetails){
    let modal = this.modalCtrl.create(ItemDetailsPage, { itemDetails: itemDetails });
    modal.onDidDismiss(data => {
      if(!!data && !!data.buyQty){
       let item = data;
       item.amount = data.selling_rate * data.buyQty;
       this.subTotal = this.subTotal + item.amount;
       this.items.push(data);
       this.calculateFinalamount();
      }
     });
    modal.present();
  }

  public calculateFinalamount(){
    this.gstTax = (this.subTotal * this.currentGSTPercent)/100;
    this.finalPayableAmount = this.gstTax + this.subTotal - this.discount;
  }

  scanItem(){
    this._barcodeScanner.scan(this.scannerOption).then((barcodeData) => {
      if (barcodeData.cancelled) {
        return false;
      }
      if(barcodeData && barcodeData.text){
        this.getItemDetails(barcodeData.text);
      }
    }, (err) => {
      
    });

    //this.getItemDetails("BR0121298973");
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
        loader.dismiss();
        this.showItemDetails(data);
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

 public removeItem(item, index){
    this.subTotal -=  item.amount;
    this.items.splice(index, 1);
    this.calculateFinalamount();
  }

}
