import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SinginPage } from '../pages/singin/singin';
import { SingupPage } from '../pages/singup/singup';
import { ContractsPage } from '../pages/contracts/contracts';
import { TradePage } from '../pages/trade/trade';
import { SettingPage } from '../pages/setting/setting';
import { WalletPage } from '../pages/wallet/wallet';
import { WalletProvider } from '../providers/wallet/wallet';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SinginPage,
    SingupPage,
    ContractsPage,
    TradePage,
    SettingPage,
    WalletPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SinginPage,
    SingupPage,
    ContractsPage,
    TradePage,
    SettingPage,
    WalletPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WalletProvider,
    AuthProvider
  ]
})
export class AppModule {}
