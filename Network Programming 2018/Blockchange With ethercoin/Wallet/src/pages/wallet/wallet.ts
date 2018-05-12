import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SinginPage } from '../singin/singin';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  ionViewCanEnter() {
    return this.auth.authenticated();
  }
}
