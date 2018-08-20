import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { WelcomePage } from '../pages/welcome/welcome';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;
  nome: String;

  pages: Array<{title: string, component: any, onlyAdmin: boolean}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();

    storage.get('nome').then((val) =>{
     this.nome = val;  
    }) ;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Welcome', component: WelcomePage, onlyAdmin: false },
      { title: 'Home', component: HomePage, onlyAdmin: false },
      { title: 'List', component: ListPage, onlyAdmin: false },
      { title: 'Registrazione', component: RegistrazionePage, onlyAdmin: false }
    ];

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
}
