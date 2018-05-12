import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WalletPage } from '../wallet/wallet';
import { SinginPage } from '../singin/singin';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl:NavController) {

  }

  ionViewDidLoad() {
    this.navCtrl.setRoot(WalletPage).catch(err => {
      this.navCtrl.setRoot(SinginPage);
    });
  }

}
