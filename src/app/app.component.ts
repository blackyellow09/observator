import { HimmelAktuellPage } from "../pages/himmelAktuell/himmelAktuell";
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from "@ionic-native/in-app-browser";

import { HomePage } from '../pages/home/home';
import { MondPage } from "../pages/mond/mond";
import { SonnePage } from "../pages/sonne/sonne";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public iab: InAppBrowser) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = Array(
      { title: 'Beobachtung starten', component: HomePage, icon: 'eye' },
      { title: 'Himmel aktuell', component: HimmelAktuellPage, icon: 'star' },
      { title: 'Mond aktuell', component: MondPage, icon: 'moon' },
      { title: 'Sonnenbeobachtung', component: SonnePage, icon: 'sunny' }
    );

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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  openUrl() {
    this.iab.create('https://www.heavens-above.com/skychart2.aspx?lat=50.78&lng=7.3&loc=Unspecified&alt=0&tz=CET',
    '_self', 'location=yes');
  }
}
