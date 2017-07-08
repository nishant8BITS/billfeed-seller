import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SupplierProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SupplierProvider {

  private headers = new Headers();
  //public API_BaseUrl = "http://localhost:3000";//'https://billfeed-backend.herokuapp.com';//'http://localhost:3000';
  public API_BaseUrl = 'https://billfeed-backend.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello InventoryServiceProvider Provider');
  }

  /*
    Get getSuppliers
   */
  public getSuppliers(){
  	return new Promise(resolve => {
  		this.http.get(this.API_BaseUrl+ '/api/v1/supplier')
  			.map(res => res.json())
  			.subscribe(data => {
  				resolve(data);
  			});
  	});
  }

 /*
     Save supplier
  */
 public saveSupplier(supplierDetail){
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.post(this.API_BaseUrl + '/api/v1/supplier', supplierDetail , options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

   /*
    	Update supplier
  */
   public updateSupplier(supplierDetail){
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
      return new Promise(resolve => {
        this.http.put(this.API_BaseUrl + '/api/v1/supplier/' + supplierDetail._id, supplierDetail , options)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      });
    }

    /*
       Delete Item to inventory
    */
   public deleteSupplier(supplierId){
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
      return new Promise(resolve => {
        this.http.delete(this.API_BaseUrl + '/api/v1/supplier/' + supplierId, options)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      });
    }
}
