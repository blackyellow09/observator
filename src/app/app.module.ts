import { HimmelAktuellPage } from "../pages/himmelAktuell/himmelAktuell";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MondPage } from "../pages/mond/mond";
import { SternenkartePage } from "../pages/sternenkarte/sternenkarte";
import { InAppBrowser } from "@ionic-native/in-app-browser";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SternenkartePage,
    MondPage,
    HimmelAktuellPage
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
    SternenkartePage,
    MondPage,
    HimmelAktuellPage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
