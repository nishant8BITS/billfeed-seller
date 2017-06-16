import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StockinPage } from '../stockin/stockin';
import { InventoryListPage } from '../inventory/inventory';
import {SellitemPage} from '../sellitem/sellitem';
import {StockinitemPage} from '../stockinitem/stockinitem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public report: string;

  constructor(public navCtrl: NavController) {
  	this.report = 'today';
  }


  public navigatePage(page){
	  	switch (page) {
	      case "addnewitempage":
	        this.navCtrl.push(StockinPage);
	        break;
	      case "stockinpage":
	        this.navCtrl.push(StockinitemPage);
	        break;
	      case "sellitempage":
	        this.navCtrl.push(SellitemPage);
	        break;
	      case "inventorypage":
	        this.navCtrl.push(InventoryListPage);
	        break;
	      default:
	        break;
	  }
   }

}
