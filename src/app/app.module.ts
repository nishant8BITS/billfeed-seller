import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StockinPage } from '../pages/stockin/stockin';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ItemDetailPage } from "../pages/itemdetail/itemdetail";
import { InventoryListPage } from '../pages/inventory/inventory';
import { InventoryServiceProvider } from '../providers/inventory-service/inventory-service';
import { InventoryModalDetailPage } from '../pages/modals/itemdetailview/itemdetailview';
import { LoginPage} from '../pages/login/login';

import { SellitemPageModule} from '../pages/sellitem/sellitem.module';
import { SettingsPageModule} from '../pages/settings/settings.module';
import { EdititemPageModule} from '../pages/edititem/edititem.module';
import { StockinitemPageModule} from '../pages/stockinitem/stockinitem.module';
import { SuppliersPageModule} from '../pages/suppliers/suppliers.module';


import { SettingsProvider } from '../providers/settings/settings';
import { AuthProvider } from '../providers/auth/auth';
import { SupplierProvider } from '../providers/supplier/supplier';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StockinPage,
    ItemDetailPage,
    InventoryListPage,
    InventoryModalDetailPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SellitemPageModule,
    SettingsPageModule,
    EdititemPageModule,
    StockinitemPageModule,
    SuppliersPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StockinPage,
    ItemDetailPage,
    InventoryListPage,
    InventoryModalDetailPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    InventoryServiceProvider,
    SettingsProvider,
    AuthProvider,
    SupplierProvider
  ]
})
export class AppModule {}
