import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { StockinPage } from '../pages/stockin/stockin';
import { InventoryListPage } from '../pages/inventory/inventory';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    switch (page) {
      case "home":
        this.nav.setRoot(HomePage);
        break;
      case "stockinpage":
        this.nav.setRoot(StockinPage);
        break;
      case "inventorylistpage":
        this.nav.setRoot(InventoryListPage);
        break;
      default:
        this.nav.setRoot(StockinPage);
        break;
    }
  }
}
