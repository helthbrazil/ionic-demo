import { Camera, CameraOptions } from '@ionic-native/camera';

import { Injectable } from '@angular/core';
@Injectable()
export class NativeCamera {

    readonly options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit : true,
        correctOrientation	: true
    }

    constructor(private camera: Camera) {

    }

    getPicture(callbackSucess, callbackError) {
        this.camera.getPicture(this.options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            callbackSucess(base64Image);
        }, (err) => {
            callbackError(err);
        });
    }
}