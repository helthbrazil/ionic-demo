webpackJsonp([4],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPageModule", function() { return ButtonsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ButtonsPageModule = (function () {
    function ButtonsPageModule() {
    }
    ButtonsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buttons__["a" /* ButtonsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buttons__["a" /* ButtonsPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
            ],
        })
    ], ButtonsPageModule);
    return ButtonsPageModule;
}());

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentesIonic_alertas__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonsPage = (function () {
    function ButtonsPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    ButtonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ButtonsPage');
    };
    ButtonsPage.prototype.showInfo = function () {
        this.alert.simpleAlert("Alerta", "Simples");
    };
    ButtonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buttons',template:/*ion-inline-start:"/home/hebert/Aplicativos/ionic-demo/src/pages/buttons/buttons.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      {{\'botoes\' | translate}}\n    </ion-title>\n\n    <ion-buttons end>\n      <button (tap)="showInfo()" ion-button icon-only>\n        <ion-icon name="md-information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <button ion-button color="primary" outline> Outline</button>\n    <button ion-button color="primary" clear> Clear</button>\n    <button ion-button color="primary" round> Round</button>\n    <button ion-button> Button</button>\n    <button ion-button block>Block Button</button>\n  </div>\n  <button ion-button full>Block Button</button>\n\n  <div padding>\n    <button ion-button icon-left>\n      <ion-icon name="home"></ion-icon>\n      Left Icon\n    </button>\n\n    <!-- Only icon (no text) -->\n    <button ion-button icon-only>\n      <ion-icon name="home"></ion-icon>\n    </button>\n\n    <button ion-button class="botao" > Custom 1</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/hebert/Aplicativos/ionic-demo/src/pages/buttons/buttons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__componentesIonic_alertas__["a" /* Alertas */]])
    ], ButtonsPage);
    return ButtonsPage;
}());

//# sourceMappingURL=buttons.js.map

/***/ })

});
//# sourceMappingURL=4.js.map