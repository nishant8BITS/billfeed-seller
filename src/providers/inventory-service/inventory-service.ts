import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InventoryServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InventoryServiceProvider {

  private headers = new Headers();

  public API_BaseUrl = "http://localhost:3000";//'https://billfeed-backend.herokuapp.com';//'http://localhost:3000';

  constructor(public http: Http) {
    console.log('Hello InventoryServiceProvider Provider');
  }

  /*
    Get Item from Inventory
   */
  public getInventoryItem(){
  	return new Promise(resolve => {
  		this.http.get(this.API_BaseUrl+ '/api/v1/inventory')
  			.map(res => res.json())
  			.subscribe(data => {
  				resolve(data);
  			});
  	});
  }

 /*
     Save Item to inventory
  */
 public saveItemToInventory(inventoryItem){
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.post(this.API_BaseUrl + '/api/v1/inventory', inventoryItem , options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

   /*
     Save Item to inventory
  */
   public updateItemToInventory(inventoryItem){
     debugger;
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
      return new Promise(resolve => {
        this.http.put(this.API_BaseUrl + '/api/v1/inventory/' + inventoryItem._id, inventoryItem , options)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      });
    }

    /*
       Delete Item to inventory
    */
   public deleteItemFromInventory(itemId){
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
      return new Promise(resolve => {
        this.http.delete(this.API_BaseUrl + '/api/v1/inventory/' + itemId, options)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      });
    }
}
