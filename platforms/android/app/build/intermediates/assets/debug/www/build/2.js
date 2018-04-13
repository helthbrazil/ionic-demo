webpackJsonp([2],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CameraPageModule = (function () {
    function CameraPageModule() {
    }
    CameraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */]),
            ],
        })
    ], CameraPageModule);
    return CameraPageModule;
}());

//# sourceMappingURL=camera.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nativeCamera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socialSharing__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentesIonic_alertas__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CameraPage = (function () {
    function CameraPage(navCtrl, navParams, nativeCamera, actionSheetCtrl, socialSharingService, vibration, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeCamera = nativeCamera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharingService = socialSharingService;
        this.vibration = vibration;
        this.alert = alert;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraPage');
    };
    CameraPage.prototype.getPicture = function () {
        var _this = this;
        this.nativeCamera.getPicture(function (base64) {
            _this.base64Image = base64;
        }, function (error) {
            console.error(error);
        });
    };
    CameraPage.prototype.pressEvent = function (event) {
        var _this = this;
        this.vibration.vibrate(100);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share your picture',
            buttons: [
                {
                    text: 'Share with Facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                        _this.socialSharingService.shareViaFacebook("Shared via Facebook", _this.base64Image, null);
                    }
                },
                {
                    text: 'Share with Instagram',
                    icon: 'logo-instagram',
                    handler: function () {
                        _this.socialSharingService.shareViaInstagram("Shared via Facebook", _this.base64Image);
                    }
                },
                {
                    text: 'Share with WhatsApp',
                    icon: 'logo-whatsapp',
                    handler: function () {
                        _this.socialSharingService.shareViaWhatsApp("Shared via Facebook", _this.base64Image, null);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CameraPage.prototype.showInfo = function () {
        this.alert.simpleAlert("Camera", "After you get picture hold the image for open the action sheet, you can share the picture via Facebook, Instagram and WhatsApp");
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"/home/hebert/Aplicativos/ionic-demo/src/pages/camera/camera.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n      <ion-title>\n        Camera\n      </ion-title>\n  \n      <ion-buttons end>\n        <button (tap)="showInfo()" ion-button icon-only>\n          <ion-icon name="md-information-circle"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <button ion-button class="botao" (tap)="getPicture()" block>get picture</button>\n  <div padding></div>\n  <img (press)="pressEvent($event)" src="{{base64Image}}" alt="">\n\n</ion-content>\n'/*ion-inline-end:"/home/hebert/Aplicativos/ionic-demo/src/pages/camera/camera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_nativeCamera__["a" /* NativeCamera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__services_socialSharing__["a" /* SocialSharingService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_5__componentesIonic_alertas__["a" /* Alertas */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ })

});
//# sourceMappingURL=2.js.map