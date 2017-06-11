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
 public saveItemToInventory(inventoryIten){
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.post(this.API_BaseUrl + '/api/v1/inventory', inventoryIten , options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
