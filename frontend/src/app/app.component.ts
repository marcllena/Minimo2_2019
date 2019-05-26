import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Station List',
      url: '/station-list',
      icon: 'home'
    },
    {
      title: 'Bike List',
      url: '/bike-list',
      icon: 'list'
    },
    {
      title: 'Add Station',
      url: '/add-station',
      icon: 'add'
    },
    {
      title: 'Add Bike',
      url: '/add-bike',
      icon: 'bicycle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
