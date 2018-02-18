webpackJsonp([2],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buttons/buttons.module": [
		275,
		1
	],
	"../pages/loading/loading.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alertas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Alertas = (function () {
    function Alertas(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    /**
     * Método responsável por abrir uma tela simples de alerta
     * */
    Alertas.prototype.simpleAlert = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: "overflow-y: auto;",
            buttons: ['OK']
        });
        alert.present();
    };
    Alertas.prototype.teste = function () {
    };
    /**
     * Método responsável por abrir uma tela de prompt
     * */
    Alertas.prototype.promptAlert = function (titulo, type, mensagem, atributo, placeholderInput, acaoString, callback) {
        var prompt = this.alertCtrl.create({
            title: titulo,
            message: mensagem,
            inputs: [
                {
                    name: atributo,
                    placeholder: placeholderInput,
                    type: type
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        callback(data, false);
                        console.log('Botão Cancelar clicado');
                    }
                },
                {
                    text: acaoString,
                    handler: function (data) {
                        data.cod == 1;
                        callback(data, true);
                        console.log('Botão salvar clicado');
                    }
                }
            ]
        });
        prompt.present();
    };
    /**
     * Método responsável por abrir uma tela de confirmação na tela.
     * Resposta do callback
     * */
    Alertas.prototype.confirmationAlert = function (titulo, mensagem, textoBotaoDisagree, textoBotaoAgree, callback) {
        var confirm = this.alertCtrl.create({
            title: titulo,
            message: mensagem,
            buttons: [
                {
                    text: textoBotaoDisagree,
                    handler: function (data) {
                        callback({ response: "Disagree", cod: 0 });
                    }
                },
                {
                    text: textoBotaoAgree,
                    handler: function (data) {
                        callback({ response: "Agree", cod: 1 });
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * Método responsável por abrir um radio button na tela a partir de uma lista
     * */
    Alertas.prototype.radioAlert = function (titulo, opcoes, callback) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(titulo);
        opcoes.sort();
        var quantidadeDeOpcoes = opcoes.length;
        for (var i = 0; i < quantidadeDeOpcoes; i++) {
            alert.addInput({
                type: 'radio',
                label: opcoes[i].label,
                value: opcoes[i].value,
                checked: false
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.testRadioOpen = false;
                callback({ codigo: data });
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    /**
     * Método utilizado para abrir uma seleção múltipla na tela.
     * No parâmetro opcoes é passado um Array de objetos JSON, onde devem
     * possuir os atributos 'label' (modo como serão apresentados na tela)
     * e 'value' (valores para cada item do checkbox)
     * */
    Alertas.prototype.checkBoxAlert = function (titulo, opcoes, callback) {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: '.alert-ios .alert-radio-label{ white-space: pre-line;} .alert-md .alert-radio-label{ white-space: pre-line;} .alert-wp .alert-radio-label{ white-space: pre-line;}',
        });
        alert.setTitle(titulo);
        opcoes.sort();
        var quantidadeDeOpcoes = opcoes.length;
        for (var i = 0; i < quantidadeDeOpcoes; i++) {
            alert.addInput({
                type: 'checkbox',
                label: opcoes[i].label,
                value: opcoes[i].value,
                checked: false
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.testRadioOpen = false;
                callback(data);
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    Alertas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Alertas);
    return Alertas;
}());

//# sourceMappingURL=alertas.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Loading = (function () {
    function Loading(loading) {
        this.loadingCtrl = loading;
    }
    /**
     * método responsável por abrir uma tela de loading.
     * O parâmetro tipoLoading altera o tipo do loading apresentado na tela.
     * Os valores do parâmetro são disponibilizados através das constante estáticas da
     * classe
     * @param mensagem
     * @param tipoLoading
     * @param conteudo
     * */
    Loading.prototype.showLoading = function (mensagem, tipoLoading) {
        this.loader = this.loadingCtrl.create({
            content: mensagem,
            dismissOnPageChange: true,
            spinner: tipoLoading
        });
        this.loader.present();
    };
    /**
     * método responsável por fechar uma tela de loading
     * */
    Loading.prototype.dismissLoading = function () {
        if (this.loader) {
            this.loader.dismiss();
        }
    };
    Loading.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "            \n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\">        \n         <img style=\"margin-top: 10px; display: block; margin: 0 auto;\"  width=\"130\" height=\"65\" src=\"assets/svg/logo_intergado_animado.svg\" />\n        </div>\n        <ion-label text-capitalize style=\"display: flex; margin: auto\" color=\"primary\">processando</ion-label>\n      </div>",
            duration: 5000
        });
        loading.present();
    };
    // CONSTANTES DOS TIPOS
    Loading.DEFAULT = 'default';
    Loading.IOS = 'ios';
    Loading.DOTS = 'dots';
    Loading.BUBBLES = 'bubbles';
    Loading.CIRCLES = 'circles';
    Loading.CRESCENT = 'crescent';
    Loading = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], Loading);
    return Loading;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentesIonic_toast__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentesIonic_loading__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentesIonic_alertas__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buttons/buttons.module#ButtonsPageModule', name: 'ButtonsPage', segment: 'buttons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__componentesIonic_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_8__componentesIonic_loading__["a" /* Loading */], __WEBPACK_IMPORTED_MODULE_9__componentesIonic_alertas__["a" /* Alertas */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__["a" /* HeaderColor */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, headerColor) {
        var _this = this;
        this.statusBar = statusBar;
        this.headerColor = headerColor;
        this.rootPage = 'LoadingPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.statusBar.styleLightContent();
            _this.statusBar.backgroundColorByHexString('#006666');
            splashScreen.hide();
            _this.headerColor.tint('#008B8B');
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hebert/Aplicativos/ionic-demo/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="primary">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n\n            <button ion-item menuClose clear (tap)="openPage(\'LoadingPage\')">\n                    <div item-left style="width:10px; float:left"> </div> \n                    <img style="float:left" width="23" height="23" src="assets/svg/loading.svg" item-left/>     \n                    Loading                \n            </button>\n\n            <button ion-item menuClose clear (tap)="openPage(\'ButtonsPage\')">\n                    <div item-left style="width:10px; float:left"> </div> \n                    <img style="float:left" width="23" height="23" src="assets/svg/press.svg" item-left/>     \n                    Buttons                \n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/hebert/Aplicativos/ionic-demo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__["a" /* HeaderColor */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Toast = (function () {
    function Toast(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    /**Função que mostra uma pequena mensagem na tela.
     * O primeiro parâmetro é a mensagem. O segundo é a posição [top, bottom e middle].
     * O terceiro parâmetro é a duração, se o valor for undefined o valor padrão é 3000 milisegundos
    */
    Toast.prototype.showToast = function (mensagem, posicao, duracao) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: duracao,
            position: posicao
        });
        toast.present(toast);
    };
    Toast.prototype.showToastWithConfirmation = function (mensagem, posicao, labelFechar) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            position: posicao,
            showCloseButton: true,
            closeButtonText: labelFechar
        });
        toast.present(toast);
    };
    Toast.BOTTOM = 'bottom';
    Toast.TOP = 'top';
    Toast.MIDDLE = 'middle';
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Toast);
    return Toast;
}());

//# sourceMappingURL=toast.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map