import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InventoryServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InventoryServiceProvider {

  private headers = new Headers();

  constructor(public http: Http) {
    console.log('Hello InventoryServiceProvider Provider');
  }

  public getInventoryItem(){
  	return new Promise(resolve => {
  		this.http.get("http://localhost:3000/api/inventory")
  			.map(res => res.json())
  			.subscribe(data => {
  				resolve(data.items);
  			});
  	});
  }

}
