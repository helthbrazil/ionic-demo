import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage), TranslateModule
  ],
})
export class CameraPageModule {}
