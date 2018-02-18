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


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }, SocialSharing,
    Toast, Loading, Alertas, HeaderColor, NativeCamera, Camera, SocialSharingService, Vibration
  ]
})
export class AppModule { }
