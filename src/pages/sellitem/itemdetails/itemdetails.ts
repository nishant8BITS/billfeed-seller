import { Component } from '@angular/core';

import {Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: './itemdetails.html'
})

export class ItemDetailsPage {
  public item: any;
  public buyQty = 0;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
     this.item = this.params.get('itemDetails');
     console.log(this.item);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addItem(){
    let item = this.item;
    item.buyQty = this.buyQty; 
    this.viewCtrl.dismiss(item);
  }
}


