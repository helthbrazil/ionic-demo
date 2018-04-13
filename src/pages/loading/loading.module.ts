import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingPage } from './loading';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    LoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingPage),TranslateModule
  ],
})
export class LoadingPageModule {}
