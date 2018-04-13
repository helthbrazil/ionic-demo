import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { Toast } from '../../componentesIonic/toast';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  private readonly PORTUGUESE: string = 'pt';
  private readonly ENGLISH: string = 'en';
  private readonly SPANISH: string = 'es';

  private languageSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService, private toast: Toast) {
  }

  ionViewDidLoad() {
    let language = localStorage.getItem("language");
    if (language)
      this.languageSelected = language;
    else
      this.languageSelected = "pt";
  }

  updateLanguage() {
    if (this.languageSelected == this.PORTUGUESE) {
      localStorage.setItem('language', "pt");
      this.translate.use('pt');
    } else if (this.languageSelected == this.ENGLISH) {
      localStorage.setItem('language', "en");
      this.translate.use('en');
    } else if (this.languageSelected == this.SPANISH) {
      localStorage.setItem('language', "es");
      this.translate.use('es');
    }

    this.translate.get("linguagemAtualizada").subscribe(msg => {
      this.toast.showToast(msg, Toast.BOTTOM, 3000);
    });
  }

  ionViewDidLeave() {
    let language = localStorage.getItem("language");
    if (language)
      this.translate.use(language);
    else
      this.translate.use('pt');
  }

  selectLanguage(language) {
    this.translate.use(language);
  }

}
