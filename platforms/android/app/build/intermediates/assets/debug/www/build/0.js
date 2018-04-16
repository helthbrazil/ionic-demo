webpackJsonp([0],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePageModule", function() { return StoragePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StoragePageModule = (function () {
    function StoragePageModule() {
    }
    StoragePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__storage__["a" /* StoragePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__storage__["a" /* StoragePage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
            ],
        })
    ], StoragePageModule);
    return StoragePageModule;
}());

//# sourceMappingURL=storage.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_category__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_categoryDao__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentesIonic_toast__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoragePage = (function () {
    function StoragePage(navCtrl, navParams, translate, categoryDao, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.categoryDao = categoryDao;
        this.toast = toast;
        this.createNewCategoryEnabled = false;
        this.typeButtonCategory = "criarCategoria";
        this.categoryName = "";
    }
    StoragePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.categoryDao.findAll(function (response) {
            _this.categoryList = response;
        }, function (error) {
            _this.toast.showToast("Erro ao buscar categorias", __WEBPACK_IMPORTED_MODULE_5__componentesIonic_toast__["a" /* Toast */].BOTTOM, 4000);
        });
    };
    StoragePage.prototype.createNewCategoryItem = function () {
        var _this = this;
        if (this.createNewCategoryEnabled) {
            // create new category
            var category_1 = new __WEBPACK_IMPORTED_MODULE_3__entity_category__["a" /* Category */]();
            category_1.$name = this.categoryName;
            // save category in database
            this.categoryDao.save(category_1, function (id) {
                _this.createNewCategoryEnabled = false;
                category_1.$id = id;
                _this.categoryList.push(category_1);
                _this.toast.showToast("Categoria salva com sucesso", __WEBPACK_IMPORTED_MODULE_5__componentesIonic_toast__["a" /* Toast */].BOTTOM, 4000);
            }, function (error) {
                _this.toast.showToast("Erro ao criar categoria", __WEBPACK_IMPORTED_MODULE_5__componentesIonic_toast__["a" /* Toast */].BOTTOM, 4000);
            });
        }
        else {
            this.createNewCategoryEnabled = true;
        }
    };
    StoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storage',template:/*ion-inline-start:"/home/hebert/Aplicativos/ionic-demo/src/pages/storage/storage.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      {{\'bancoDeDados\' | translate}}\n    </ion-title>\n\n    <ion-buttons end>\n      <button (tap)="showInfo()" ion-button icon-only>\n        <ion-icon name="md-information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">{{\'categoria\' | translate}}</ion-label>\n      <ion-select interface="popover">\n        <ion-option *ngFor="let category of categoryList" [value]="category.$id">{{category.$name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-item *ngIf="createNewCategoryEnabled" class="w3-container w3-animate-opacity w3-animate-right">\n    <ion-label floating>Teste</ion-label>\n    <ion-input [(ngModel)]="categoryName" type="text" color="primary"></ion-input>\n  </ion-item>\n\n\n  <button [disabled]="createNewCategoryEnabled && categoryName.length < 1" ion-button class="botao" (tap)="createNewCategoryItem()" block color="primary">{{ typeButtonCategory | translate}}</button>\n\n\n</ion-content>'/*ion-inline-end:"/home/hebert/Aplicativos/ionic-demo/src/pages/storage/storage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__dao_categoryDao__["a" /* CategoryDao */],
            __WEBPACK_IMPORTED_MODULE_5__componentesIonic_toast__["a" /* Toast */]])
    ], StoragePage);
    return StoragePage;
}());

//# sourceMappingURL=storage.js.map

/***/ })

});
//# sourceMappingURL=0.js.map