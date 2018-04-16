import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HeaderColor } from '@ionic-native/header-color';
import { Vibration } from '@ionic-native/vibration';

import { MyApp } from './app.component';
import { Toast } from '../componentesIonic/toast';
import { Loading } from '../componentesIonic/loading';
import { Alertas } from '../componentesIonic/alertas';
import { NativeCamera } from '../services/nativeCamera';
import { Camera } from '@ionic-native/camera';
import { SocialSharingService } from '../services/socialSharing';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';
import { BD } from '../persistence/bd';
import { BDUtil } from '../persistence/bdUtil';
import { CategoryDao } from '../dao/categoryDao';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }, SocialSharing,
    Toast, Loading, Alertas, HeaderColor, NativeCamera, Camera, SocialSharingService,
    Vibration, BD, BDUtil, CategoryDao
  ]
})
export class AppModule { }
