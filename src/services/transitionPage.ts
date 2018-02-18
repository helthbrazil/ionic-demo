import { Injectable } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Injectable()
export class TransitionPage {
    public options: NativeTransitionOptions;
    constructor(private nativePageTransitions: NativePageTransitions) {
        this.init();
    }
    public init() {
        this.options = {
            direction: 'left',
            duration: 100,
            slowdownfactor: 1,
            /*    slidePixels: -1,*/
            iosdelay: 100,
            androiddelay: 70,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0
        };
    }

    public setTransitionFade() {
        this.nativePageTransitions.fade(this.options);
    }

    public setTransitionSlideLeft() {
        let options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: -1,
            iosdelay: 100,
            androiddelay: 70,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0
        };

        this.nativePageTransitions.slide(options);
    }

    public setTransitionSlideRight() {
        let options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: -1,
            iosdelay: 100,
            androiddelay: 100,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0
        };

        this.nativePageTransitions.slide(options);
    }
    public setTransitionSlideRightMenu() {
        let options = {
            direction: 'right',
            duration: 500,
            slowdownfactor: 1,
            /*    slidePixels: -1,*/
            iosdelay: 100,
            androiddelay: 100,
            fixedPixelsTop: 57,
            fixedPixelsBottom: 0
        };

        this.nativePageTransitions.slide(options);
    }

    public setTransitionSlideLeftMenu() {
        let options = {
            direction: 'left',
            duration: 500,
            slowdownfactor: 1,
            /*    slidePixels: -1,*/
            iosdelay: 100,
            androiddelay: 100,
            fixedPixelsTop: 57,
            fixedPixelsBottom: 0
        };

        this.nativePageTransitions.slide(options);
    }

    public setTransitionDrawer() {
        this.nativePageTransitions.drawer(this.options);
    }

    public setTransitionCurl() {
        this.nativePageTransitions.curl(this.options);
    }

    public setTransitionFlip() {
        this.nativePageTransitions.flip(this.options);
    }


}