import { SocialSharing } from '@ionic-native/social-sharing';


import { Injectable } from '@angular/core';
Injectable()
export class SocialSharingService {

    static get parameters(){
        return [[SocialSharing]];
    }

    constructor(public socialSharing: SocialSharing){

    }

    shareViaFacebook(message: string, image:string, url){
        this.socialSharing.shareViaFacebook(message, image, url);
    }

    shareViaInstagram(message: string, image:string){
        this.socialSharing.shareViaInstagram(message, image);
    }

    shareViaWhatsApp(message: string, image:string, url){
        this.socialSharing.shareViaWhatsApp(message, image, url);
    }
}