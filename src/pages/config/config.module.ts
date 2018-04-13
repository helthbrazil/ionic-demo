import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigPage } from './config';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    ConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigPage),TranslateModule
  ],
})
export class ConfigPageModule {}
