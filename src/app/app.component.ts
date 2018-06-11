import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from "@ionic/storage";

import { GeneralPage } from '../pages/general/general';
import { AnulUnuPage } from '../pages/anul-unu/anul-unu';
import { AnulDoiPage } from '../pages/anul-doi/anul-doi';
import { AnulTreiPage } from '../pages/anul-trei/anul-trei';
import { SecretariatPage } from '../pages/secretariat/secretariat';
import { LoginPage } from "../pages/login/login";
import {ContPage} from "../pages/cont/cont";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any, icon: string}>;
  activePage: string;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'General', component: GeneralPage, icon: 'home' },
      { title: 'Secretariat', component: SecretariatPage, icon: 'paper' },
      { title: 'Anul I', component: AnulUnuPage, icon: 'paper-plane' },
      { title: 'Anul II', component: AnulDoiPage, icon: 'plane' },
      { title: 'Anul III', component: AnulTreiPage, icon: 'jet' },
      { title: 'Cont', component: ContPage, icon: 'contact' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('fireUser').then((user) => {
        if(user === null) {
          this.nav.setRoot(this.rootPage);
        }
      });

    });
  }

  openPage(page) {
    // -->Check: active page
    if (page.component.name == 'GeneralPage') {
      this.nav.setRoot(page.component); // set as root if is general page
    } else {
      this.activePage = this.nav.getActive().name;
      if (this.activePage !== page.component.name) {
        this.nav.push(page.component); // push only if we select a non active page
      } else {
        console.log('No need to call the same page!');
      }
    }
  }
}
