import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-scan-result',
  templateUrl: 'itemdetail.html'
})
export class ItemDetailPage {
  public scannedText: string;

  constructor(public navCtrl: NavController, private _navParams: NavParams) {}

  ionViewDidLoad() {
    this.scannedText = this._navParams.get("scannedText");
  }

}
