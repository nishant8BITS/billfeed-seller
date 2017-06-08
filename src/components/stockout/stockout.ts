import { Component } from '@angular/core';

/**
 * Generated class for the StockoutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'stockout',
  templateUrl: 'stockout.html'
})
export class StockoutComponent {

  text: string;

  constructor() {
    console.log('Hello StockoutComponent Component');
    this.text = 'Hello World';
  }

}
