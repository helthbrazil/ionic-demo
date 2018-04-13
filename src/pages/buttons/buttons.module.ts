import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsPage } from './buttons';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    ButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsPage), TranslateModule
  ],
})
export class ButtonsPageModule { }
