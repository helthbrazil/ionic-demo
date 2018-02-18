import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alertas } from '../../componentesIonic/alertas';

@IonicPage()
@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
})
export class ButtonsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alert: Alertas) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonsPage');
  }

  showInfo() {
    this.alert.simpleAlert("Alerta", "Simples");
  }

}
