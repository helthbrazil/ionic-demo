import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
import { TranslateService } from 'ng2-translate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'LoadingPage';

  constructor(platform: Platform, public statusBar: StatusBar, splashScreen: SplashScreen,
    private headerColor: HeaderColor, private translate: TranslateService) {
    platform.ready().then(() => {
      let language: string = localStorage.getItem('language');
      if (language) {
        this.translate.use(language);
      } else {
        this.translate.use("pt");
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#006666');
      this.translate.addLangs(["pt", "en"]);


      splashScreen.hide();

      this.headerColor.tint('#008B8B');
    });
  }

  openPage(page: string) {
    this.rootPage = page;
  }
}

