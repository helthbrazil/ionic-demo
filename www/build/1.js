webpackJsonp([1],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfigPageModule = (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
            ],
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentesIonic_toast__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigPage = (function () {
    function ConfigPage(navCtrl, navParams, translate, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.toast = toast;
        this.PORTUGUESE = 'pt';
        this.ENGLISH = 'en';
        this.SPANISH = 'es';
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        var language = localStorage.getItem("language");
        if (language)
            this.languageSelected = language;
        else
            this.languageSelected = "pt";
    };
    ConfigPage.prototype.updateLanguage = function () {
        var _this = this;
        if (this.languageSelected == this.PORTUGUESE) {
            localStorage.setItem('language', "pt");
            this.translate.use('pt');
        }
        else if (this.languageSelected == this.ENGLISH) {
            localStorage.setItem('language', "en");
            this.translate.use('en');
        }
        else if (this.languageSelected == this.SPANISH) {
            localStorage.setItem('language', "es");
            this.translate.use('es');
        }
        this.translate.get("linguagemAtualizada").subscribe(function (msg) {
            _this.toast.showToast(msg, __WEBPACK_IMPORTED_MODULE_3__componentesIonic_toast__["a" /* Toast */].BOTTOM, 3000);
        });
    };
    ConfigPage.prototype.ionViewDidLeave = function () {
        var language = localStorage.getItem("language");
        if (language)
            this.translate.use(language);
        else
            this.translate.use('pt');
    };
    ConfigPage.prototype.selectLanguage = function (language) {
        this.translate.use(language);
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"/home/hebert/Aplicativos/ionic-demo/src/pages/config/config.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      {{\'configuracao\' | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list [(ngModel)]="languageSelected" radio-group>\n    <ion-list-header no-lines>\n      {{\'linguagem\' | translate}}\n      <!--   {{\'linguagem\': translate}} -->\n    </ion-list-header>\n\n    <ion-item no-lines>\n      <ion-label>{{\'portugues\' | translate }}</ion-label>\n      <ion-radio (tap)="selectLanguage(\'pt\')" value="pt"></ion-radio>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label>{{\'ingles\' | translate }}</ion-label>\n      <ion-radio (tap)="selectLanguage(\'en\')" value="en"></ion-radio>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label>{{\'espanhol\' | translate }}</ion-label>\n      <ion-radio (tap)="selectLanguage(\'es\')" value="es"></ion-radio>\n    </ion-item>\n\n  </ion-list>\n\n  <button (tap)="updateLanguage()" ion-button block class="botao">{{\'trocarIdioma\' | translate }}</button>\n</ion-content>'/*ion-inline-end:"/home/hebert/Aplicativos/ionic-demo/src/pages/config/config.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__componentesIonic_toast__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__componentesIonic_toast__["a" /* Toast */]) === "function" && _d || Object])
    ], ConfigPage);
    return ConfigPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=config.js.map

/***/ })

});
//# sourceMappingURL=1.js.map