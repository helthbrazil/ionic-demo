import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoragePage } from './storage';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    StoragePage,
  ],
  imports: [
    IonicPageModule.forChild(StoragePage), TranslateModule
  ],
})
export class StoragePageModule {}
