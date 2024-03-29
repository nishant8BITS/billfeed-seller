import { Component } from '@angular/core';

import {Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: './itemdetailview.html'
})

export class InventoryModalDetailPage {
  public item: any;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
     this.item = this.params.get('itemDetail');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
