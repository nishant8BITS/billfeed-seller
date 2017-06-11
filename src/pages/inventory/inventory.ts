import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ModalController } from 'ionic-angular';
import {InventoryServiceProvider} from '../../providers/inventory-service/inventory-service'
import { InventoryModalDetailPage } from '../modals/itemdetailview/itemdetailview';

import {ItemDetailPage} from '../itemdetail/itemdetail.ts';


@Component({
  selector: 'inventory-list',
  templateUrl: 'inventory.html',
  providers: [InventoryServiceProvider]
})
export class InventoryListPage {
  public scannedText: string;
  public items: any;
  public itemsList: any;

  constructor(
  	public navCtrl: NavController,
  	private _navParams: NavParams,
  	private _inventoryServiceProvider: InventoryServiceProvider,
  	public loadingCtrl: LoadingController,
  	public modalCtrl: ModalController) {
  	this.loadInventoryItem();
  }

  ionViewDidLoad() {

  }

  loadInventoryItem(){

	let loader = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: 'circles'
    });
    loader.present();

  	 /*
    	Have to make API call and get all inventory list
     */
    this._inventoryServiceProvider.getInventoryItem()
    	.then(data => {
    		this.items = data;
    		this.itemsList = data;
    		loader.dismiss();
    		console.log(this.items = data);
    	});
  }


  viewItemDetail(itemDetail){
    this.navCtrl.push(ItemDetailPage, {itemDetail: itemDetail});
  	// let modal = this.modalCtrl.create(InventoryModalDetailPage, {itemDetail: itemDetail});
   //  modal.present();
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
    	this.items = this.itemsList;
    }
  }

}
