import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ItemDetailPage } from "../itemdetail/itemdetail";



@Component({
  selector: 'page-scan',
  templateUrl: 'stockin.html'
})
export class StockinPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;

  public itemUnit= '';
  public unitSelectOptions = {
     title: 'Select Unit'
  }
  public barCode='';

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private _barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    this.eventId = this._navParams.get('eventId');
    this.eventTitle = this._navParams.get('eventTitle');

    this.buttonText = "Scan";
    this.loading = false;
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;

    this._barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      this.goToResult(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

  private goToResult(barcodeData) {

    this.barCode = barcodeData.text;

    // this._nav.push(ItemDetailPage, {
    //   scannedText: barcodeData.text
    // });
  }

  private checkPass(data) {
  }
}
