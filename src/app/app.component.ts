import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { StockinPage } from '../pages/stockin/stockin';
import { InventoryListPage } from '../pages/inventory/inventory';

import {LoginPage} from '../pages/login/login';
import {SellitemPage} from '../pages/sellitem/sellitem';
import {SettingsPage} from '../pages/settings/settings';
import {StockinitemPage} from '../pages/stockinitem/stockinitem';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = LoginPage;
  rootPage: any = LoginPage; //SellitemPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.splashScreen.show();
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
        this.nav.setRoot(StockinitemPage);
        break;
      case "inventorylistpage":
        this.nav.setRoot(InventoryListPage);
        break;
      case "sellitemspage": 
        this.nav.setRoot(SellitemPage);
        break;
      case "settingspage": 
        this.nav.setRoot(SettingsPage);
        break;
      default:
        this.nav.setRoot(HomePage);
        break;
    }
  }
}
