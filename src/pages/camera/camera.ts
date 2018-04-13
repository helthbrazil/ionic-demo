import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeCamera } from '../../services/nativeCamera';
import { ActionSheetController } from 'ionic-angular';
import { SocialSharingService } from '../../services/socialSharing';
import { Vibration } from '@ionic-native/vibration';
import { Alertas } from '../../componentesIonic/alertas';
import { TranslateService } from 'ng2-translate';


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativeCamera: NativeCamera, public actionSheetCtrl: ActionSheetController,
    private socialSharingService: SocialSharingService, public vibration: Vibration,
    private alert: Alertas, private translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  getPicture() {
    this.nativeCamera.getPicture(base64 => {
      this.base64Image = base64;
    }, error => {
      console.error(error);
    });
  }

  pressEvent(event) {
    this.vibration.vibrate(100);

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share your picture',
      buttons: [
        {
          text: 'Share with Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.socialSharingService.shareViaFacebook("Shared via Facebook", this.base64Image, null);
          }
        },
        {
          text: 'Share with Instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.socialSharingService.shareViaInstagram("Shared via Facebook", this.base64Image);
          }
        },
        {
          text: 'Share with WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialSharingService.shareViaWhatsApp("Shared via Facebook", this.base64Image, null);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showInfo() {
    this.translate.get("cameraInfo").subscribe(translate => {
      this.alert.simpleAlert("Camera", translate);
    });
  }

}
