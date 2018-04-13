webpackJsonp([0],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingPageModule = (function () {
    function LoadingPageModule() {
    }
    LoadingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
            ],
        })
    ], LoadingPageModule);
    return LoadingPageModule;
}());

//# sourceMappingURL=loading.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentesIonic_loading__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentesIonic_alertas__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoadingPage = (function () {
    function LoadingPage(navCtrl, navParams, loading, alert, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.alert = alert;
        this.translate = translate;
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoadingPage');
    };
    LoadingPage.prototype.showLoading = function (type) {
        switch (type) {
            case 1:
                this.translate.use('pt');
                this.loading.showLoading("IOS Loading (3 seconds)", __WEBPACK_IMPORTED_MODULE_2__componentesIonic_loading__["a" /* Loading */].IOS);
                break;
            case 2:
                this.translate.use('en');
                this.loading.showLoading("Android Loading (3 seconds)", __WEBPACK_IMPORTED_MODULE_2__componentesIonic_loading__["a" /* Loading */].CRESCENT);
                break;
            case 3:
                this.loading.showLoading("Windows sPhone Loading (3 seconds)", __WEBPACK_IMPORTED_MODULE_2__componentesIonic_loading__["a" /* Loading */].BUBBLES);
                break;
            case 4:
                this.loading.showLoading("Typing (3 seconds)", __WEBPACK_IMPORTED_MODULE_2__componentesIonic_loading__["a" /* Loading */].DOTS);
                break;
        }
        this.closeLoading();
    };
    LoadingPage.prototype.closeLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismissLoading();
        }, 3000);
    };
    LoadingPage.prototype.showInfo = function () {
        this.alert.simpleAlert("Alerta", "Simples");
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"/home/hebert/Aplicativos/ionic-demo/src/pages/loading/loading.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Loadings\n    </ion-title>\n\n    <ion-buttons end>\n      <button (tap)="showInfo()" ion-button icon-only>\n        <ion-icon name="md-information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>{{ \'frase\' | translate }}</div>\n\n  <button class="botao" (tap)="showLoading(1)" block ion-button>IOS Loading </button>\n  <button class="botao" (tap)="showLoading(2)" block ion-button>Android Loading</button>\n  <button class="botao" (tap)="showLoading(3)" block ion-button>WP Loading</button>\n  <button class="botao" (tap)="showLoading(4)" block ion-button>Typing</button>\n</ion-content>'/*ion-inline-end:"/home/hebert/Aplicativos/ionic-demo/src/pages/loading/loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__componentesIonic_loading__["a" /* Loading */], __WEBPACK_IMPORTED_MODULE_3__componentesIonic_alertas__["a" /* Alertas */], __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ })

});
//# sourceMappingURL=0.js.map