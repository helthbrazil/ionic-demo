import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loading } from '../../componentesIonic/loading';
import { Alertas } from '../../componentesIonic/alertas';
import { TranslateService } from 'ng2-translate';

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loading: Loading, private alert: Alertas, private translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  showLoading(type: number) {
    switch (type) {
      case 1:
        this.translate.use('pt');
        this.loading.showLoading("IOS Loading (3 seconds)", Loading.IOS);
        break;

      case 2:
        this.translate.use('en');
        this.loading.showLoading("Android Loading (3 seconds)", Loading.CRESCENT);
        break;

      case 3:
        this.loading.showLoading("Windows sPhone Loading (3 seconds)", Loading.BUBBLES);
        break;

      case 4:
        this.loading.showLoading("Typing (3 seconds)", Loading.DOTS);
        break;
    }

    this.closeLoading();
  }

  closeLoading() {
    setTimeout(() => {
      this.loading.dismissLoading();
    }, 3000);
  }

  showInfo() {
    this.alert.simpleAlert("Alerta", "Simples");
  }

}
