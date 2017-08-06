import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BrandPage } from '../pages/home/brand/brand';
import { ClientPage } from '../pages/list/client/client';
import { ClientHistoryPage } from '../pages/list/client/history/history';
import { ClientHistoryInputPage } from '../pages/list/client/history/input/input';
import { ClientHistoryOutputPage } from '../pages/list/client/history/output/output';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BrandPage,
    ClientPage,
    ClientHistoryPage,
    ClientHistoryInputPage,
    ClientHistoryOutputPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BrandPage,
    ClientPage,
    ClientHistoryPage,
    ClientHistoryInputPage,
    ClientHistoryOutputPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
