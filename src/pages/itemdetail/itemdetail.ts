import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController,ToastController } from 'ionic-angular';
import {EdititemPage} from '../edititem/edititem';
import {InventoryServiceProvider} from '../../providers/inventory-service/inventory-service';
import { InventoryListPage } from '../inventory/inventory';


@Component({
  selector: 'page-scan-result',
  templateUrl: 'itemdetail.html'
})
export class ItemDetailPage {
  public item: any;

  constructor(public navCtrl: NavController, private _navParams: NavParams,private _inventoryServiceProvider: InventoryServiceProvider,
          public loadingCtrl: LoadingController,
          public alertCtrl: AlertController,public toastCtrl: ToastController) {
  	 this.item = this._navParams.get('itemDetail');
  }

  ionViewDidLoad() {
    
  }

  editItem(item){
  	this.navCtrl.push(EdititemPage, {itemDetail: item});
  }

  deleteItem(item){
    this.showDeleteConfirm(item);
  }

   private showAlert(title, text){
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: ['OK']
      });
      alert.present();
   }


  showDeleteConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Warning',
      message: 'Are you sure you want to delete this item ? ',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            confirm.dismiss();
            return false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
           this.confirmDelete(item);
          }
        }
      ]
    });
    confirm.present();
  }


  private confirmDelete(item){
   let loader = this.loadingCtrl.create({
      spinner: 'circles'
    });
    loader.present();

    this._inventoryServiceProvider.deleteItemFromInventory(item._id).then((data) =>{
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Item deleted successfully.',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot(InventoryListPage);
    },(err) => {
      this.showAlert("Error", "Sorry but we enconter with some issue. Please try again.");
      loader.dismiss();
    });
  }

}
