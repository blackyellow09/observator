import { Component } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'sternenkarte.html'
})
export class SternenkartePage {

  constructor(public iab: InAppBrowser) {

    const browser = this.iab.create('https://www.heavens-above.com/skychart2.aspx?lat=50.78&lng=7.3&loc=Unspecified&alt=0&tz=CET',
    '_self', 'location=yes');

  }
}
