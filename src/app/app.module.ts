import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import {HttpClientModule} from '@angular/common/http';
import { WelcomePage } from '../pages/welcome/welcome';

import {IonicStorageModule } from '@ionic/storage';
import { UserProvider } from '../providers/userProvider';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
