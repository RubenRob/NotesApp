(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class APIService {
    constructor(http) {
        this.http = http;
        //
        //bewerkingen op "/users"
        //
        //haal de lijst van alle gebruikers op
        this.getUsers = () => {
            return this.http.get(this.route + "/users");
        };
        //haal een gebruiker op
        this.getUser = (userName) => {
            return this.http.get(this.route + "/users/" + userName);
        };
        //voeg een gebruiker toe
        this.addUser = (userName) => {
            return this.http.post(this.route + "/users", { userName: userName });
        };
        //verwijder een gebruiker
        this.delUser = (userId) => {
            return this.http.delete(this.route + "/users?userId=" + userId);
        };
        //
        //bewerkingen op "/Categories"
        //
        //haal de lijst van alle categorien op
        this.getCategories = () => {
            return this.http.get(this.route + "/categories");
        };
        //haal de lijst van alle categorien van een gebruiker op
        this.getCategoriesOfUser = (userId) => {
            return this.http.get(this.route + "/users/" + userId + "/categories");
        };
        //voeg een categorie toe voor een bepaalde gebruiker
        this.addCategoryForUser = (userId, description, color) => {
            return this.http.post(this.route + "/users/" + userId + "/categories", { description: description, color: color });
        };
        //verwijder een gebruiker
        this.delCategoriesOfUser = (categoryId) => {
            return this.http.delete(this.route + "/categories?categoryId=" + categoryId);
        };
        //
        //bewerkingen op "/notes"
        //
        //haal de lijst van alle notities op
        this.getNotes = () => {
            return this.http.get(this.route + "/notes");
        };
        //haal de lijst van alle notities van een gebruiker op
        this.getNotesOfUser = (userId) => {
            return this.http.get(this.route + "/users/" + userId + "/notes");
        };
        //haal de lijst van alle notities van een gebruiker op
        this.getNotesOfUserWithCategoryFilter = (userId, categoryId) => {
            return this.http.get(this.route + "/users/" + userId + "/categories/" + categoryId + "/notes");
        };
        //voeg een notitie toe voor een bepaalde gebruiker
        this.addNoteForUser = (userId, categoryId, content) => {
            return this.http.post(this.route + "/users/" + userId + "/categories/" + categoryId + "/notes", { content: content });
        };
        //voeg een notitie toe voor een bepaalde gebruiker
        this.updateNoteOfUser = (noteId, categoryId, content) => {
            return this.http.patch(this.route + "/notes/" + noteId, { categoryId: categoryId, content: content });
        };
        //voeg een notitie toe voor een bepaalde gebruiker
        this.delNoteOfUser = (noteId) => {
            return this.http.delete(this.route + "/notes?noteId=" + noteId);
        };
        this.route = 'https://jensjorisdecorte-backend-example-4.glitch.me';
    }
}
APIService.ɵfac = function APIService_Factory(t) { return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: APIService, factory: APIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(apiService) {
        this.title = 'NotesApp';
        this.actieveGebruiker = "Gina";
        this.gebruikers = [];
        this.notities = [];
        this.notitiesGebruiker = [];
        this.notitiesGebruikerMetQueryOpNotes = [];
        this.categorien = [];
        this.zoekString = "Marc";
        this.gevondenNotities = [];
        this.gevondenNotitiesFilter = [];
        this.categorienVanGebruiker = [];
        this.filterCategorie = "prive";
        this.apiServiceApp = apiService;
        //this.vulDatabaseMetMockDataUsers();
        //this.vulDatabaseMetMockDataCategories();
        //this.vulDatabaseMetMockDataNotes();
    }
    ngOnInit() {
    }
    //nep data om de functies te controleren
    vulDatabaseMetMockDataUsers() {
        this.apiServiceApp.addUser("Gina").subscribe((data) => {
            console.log(data);
            this.apiServiceApp.getUser("Gina").subscribe((data) => {
                this.userid = data.id;
                this.apiServiceApp.addCategoriesForUser(this.userid, "prive").subscribe((data) => {
                    console.log(data);
                });
                this.apiServiceApp.addCategoriesForUser(this.userid, "dringend").subscribe((data) => {
                    console.log(data);
                });
            });
        });
        this.apiServiceApp.addUser("Chantal").subscribe((data) => {
            console.log(data);
            this.apiServiceApp.getUser("Chantal").subscribe((data) => {
                this.userid = data.id;
                this.apiServiceApp.addCategoriesForUser(this.userid, "prive").subscribe((data) => {
                    console.log(data);
                });
                this.apiServiceApp.addCategoriesForUser(this.userid, "dringend").subscribe((data) => {
                    console.log(data);
                });
            });
        });
        this.apiServiceApp.addUser("Sonja").subscribe((data) => {
            console.log(data);
            this.apiServiceApp.getUser("Sonja").subscribe((data) => {
                this.userid = data.id;
                this.apiServiceApp.addCategoriesForUser(this.userid, "dringend").subscribe((data) => {
                    console.log(data);
                });
            });
        });
        this.apiServiceApp.addUser("Thierry").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Karel").subscribe((data) => {
            console.log(data);
            this.apiServiceApp.getUser("Karel").subscribe((data) => {
                this.userid = data.id;
                this.apiServiceApp.addCategoriesForUser(this.userid, "prive").subscribe((data) => {
                    console.log(data);
                });
            });
        });
        this.apiServiceApp.addUser("Tim").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Marie").subscribe((data) => {
            console.log(data);
            this.apiServiceApp.getUser("Marie").subscribe((data) => {
                this.userid = data.id;
                this.apiServiceApp.addCategoriesForUser(this.userid, "dringend").subscribe((data) => {
                    console.log(data);
                });
            });
        });
        this.apiServiceApp.addUser("Jonathan").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Ilse").subscribe((data) => {
            console.log(data);
            this.apiServiceApp.getUser("Ilse").subscribe((data) => {
                this.userid = data.id;
                this.apiServiceApp.addCategoriesForUser(this.userid, "dringend").subscribe((data) => {
                    console.log(data);
                });
            });
        });
        this.apiServiceApp.addUser("Isabel").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Peter").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("David").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Geert").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Tom").subscribe((data) => {
            console.log(data);
            this.apiServiceApp.getUser("Tom").subscribe((data) => {
                this.userid = data.id;
                this.apiServiceApp.addCategoriesForUser(this.userid, "prive").subscribe((data) => {
                    console.log(data);
                });
            });
        });
    }
    vulDatabaseMetMockDataCategories() {
    }
    vulDatabaseMetMockDataNotes() {
        this.apiServiceApp.addNoteForUser("Gina", "bureau kuisen", "dringend").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Gina", "facebook checken", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Gina", "boodschappen doen", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Chantal", "bureau kuisen", "dringend").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Chantal", "facebook checken", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Chantal", "dochter bellen", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Sonja", "facturen bezorgen", "dringend").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Karel", "personeel beoordelen", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Karel", "avondje uit", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Marie", "les gaan volgen", "dringend").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Tom", "vrouw bellen", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Ilse", "infobrochure verspreiden", "dringend").subscribe((data) => {
            console.log(data);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");






function HomeComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HomeComponent_ng_template_10_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HomeComponent_ng_template_10_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_10_ng_template_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.addUserShowInputField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nieuwe account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_10_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gebruikersnaam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_10_ng_template_15_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.newUserName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_10_ng_template_15_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.addUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "account aanmaken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.newUserName);
} }
function HomeComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "gebruikersnaam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_10_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.loginUserName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_10_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.getUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "inloggen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_ng_template_10_ng_container_12_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_ng_template_10_ng_template_13_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ng_template_10_ng_template_15_Template, 7, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.loginUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.addUserClicked)("ngIfThen", _r6)("ngIfElse", _r8);
} }
function HomeComponent_ng_template_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HomeComponent_ng_template_12_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.setAddNoteClicked(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nieuwe notitie aanmaken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r20.categoriesOfUser.length == 0);
} }
function HomeComponent_ng_template_12_ng_template_9_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r42.description);
} }
function HomeComponent_ng_template_12_ng_template_9_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HomeComponent_ng_template_12_ng_template_9_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_9_ng_template_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.addNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notitie toevoegen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_9_ng_template_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.setChangeNoteClicked(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "annuleren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_12_ng_template_9_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_9_ng_template_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r46.changeNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notitie wijzigen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_9_ng_template_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.setChangeNoteClicked(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "annuleren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_12_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_12_ng_template_9_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.noteContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_12_ng_template_9_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.selectedNotesCategory = $event; })("change", function HomeComponent_ng_template_12_ng_template_9_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.noteCategory($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "--- Kies een categorie ---");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_ng_template_12_ng_template_9_option_11_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_ng_template_12_ng_template_9_ng_container_13_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_template_12_ng_template_9_ng_template_14_Template, 4, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_ng_template_12_ng_template_9_ng_template_16_Template, 4, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.message5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.noteContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.message6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.selectedNotesCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.categoriesOfUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.changeNoteClicked)("ngIfThen", _r38)("ngIfElse", _r40);
} }
function HomeComponent_ng_template_12_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HomeComponent_ng_template_12_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.setAddCategoryClicked(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nieuwe categorie aanmaken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_12_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_12_ng_template_19_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.categoryDescriptionNew = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function HomeComponent_ng_template_12_ng_template_19_Template_input_colorPickerChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.categoryColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.addCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "maak categorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_19_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.setAddCategoryClicked(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "annuleren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.message3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.categoryDescriptionNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.message4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r27.categoryColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx_r27.categoryColor);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function HomeComponent_ng_template_12_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r60.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, category_r60.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r60.description);
} }
function HomeComponent_ng_template_12_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HomeComponent_ng_template_12_ng_template_70_div_2_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_70_div_2_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r66.setChangeNoteClicked(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notitie bewerken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r64.notesOfUser.length == 0);
} }
function HomeComponent_ng_template_12_ng_template_70_div_2_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_70_div_2_div_3_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r68.deleteNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notitie verwijderen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r65.notesOfUser.length == 0);
} }
function HomeComponent_ng_template_12_ng_template_70_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_12_ng_template_70_div_2_div_3_button_1_Template, 2, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_12_ng_template_70_div_2_div_3_button_2_Template, 2, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.selectedNote == note_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.selectedNote == note_r62);
} }
function HomeComponent_ng_template_12_ng_template_70_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_ng_template_70_div_2_Template_textarea_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const note_r62 = ctx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r71.onNoteClick(note_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_12_ng_template_70_div_2_div_3_Template, 3, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r62 = ctx.$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r61.getColor(note_r62)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r62.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r61.selectedNote == note_r62);
} }
function HomeComponent_ng_template_12_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Klik op de notitie die u wenst te bewerken of verwijderen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_12_ng_template_70_div_2_Template, 4, 5, "div", 29);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.notes);
} }
function HomeComponent_ng_template_12_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.message1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.message2, " ");
} }
function HomeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_ng_template_12_ng_container_6_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_ng_template_12_ng_template_7_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_ng_template_12_ng_template_9_Template, 18, 8, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_ng_template_12_ng_container_16_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_ng_template_12_ng_template_17_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_ng_template_12_ng_template_19_Template, 13, 6, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Filteren op categorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_12_Template_select_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.selectedFilterCategoryFilter = $event; })("change", function HomeComponent_ng_template_12_Template_select_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.filterCategory($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "--- Kies een categorie ---");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_ng_template_12_option_35_Template, 2, 5, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.filterNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "filter toepassen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Filteren op inhoud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_12_Template_input_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.substring = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.searchNotesWithSubstring(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "zoeken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.showAllNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "alle filters wissen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.logOff(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "afmelden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_12_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.deleteUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "account wissen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_ng_template_12_ng_container_69_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HomeComponent_ng_template_12_ng_template_70_Template, 3, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, HomeComponent_ng_template_12_ng_template_72_Template, 3, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.addNoteClicked)("ngIfThen", _r19)("ngIfElse", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.categoriesOfUser.length != 0 && !ctx_r4.addcategoryClicked)("ngIfThen", _r24)("ngIfElse", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.selectedFilterCategoryFilter)("disabled", ctx_r4.notesOfUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.categoriesOfUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.notesOfUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.substring)("disabled", ctx_r4.notesOfUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.notesOfUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.notesOfUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.notesOfUser.length != 0)("ngIfThen", _r30)("ngIfElse", _r32);
} }
class HomeComponent {
    constructor(ApiService) {
        //messages
        this.message0 = "Welkom bij notesApp";
        this.message1 = "Geef uw gebruikersnaam in om in te loggen.";
        this.message2 = "Nieuwe gebruiker?  Maak een account aan.";
        this.message3 = "Geef hier de naam van uw categorie in";
        this.message4 = "In welke kleur wilt u de categorie weergeven";
        this.message5 = "Vul hier uw notitie in";
        this.message6 = "Kies uw notitiecategorie";
        this.loginUserName = "Arthur Coppens";
        //userExists is false wanneer loginUserName niet gekend is
        this.userExists = false;
        //categoriën van gebruiker
        this.categoriesOfUser = [];
        //notities van gebruiker
        this.notesOfUser = [];
        //lijst van weer te geven notities
        this.notes = [];
        //variabelen voor specifieke functies
        //geselecteerde categorie staat standaard op -1: --- kies een categorie ---
        this.selectedFilterCategoryFilter = -1;
        //geselecteerde categorie staat standaard op -1: --- kies een categorie ---
        this.selectedNotesCategory = -1;
        //velden voor de nieuwe notitie weergeven
        this.addNoteClicked = false;
        this.noteContent = "";
        //velden voor de nieuwe account weergeven
        this.addUserClicked = false;
        this.newUserName = "";
        //velden nieuwe categorie weergeven
        this.addcategoryClicked = false;
        this.categoryDescriptionNew = "";
        //geselecteerde notitie om te bewerken of te verwijderen
        this.messageSelectedNote = "deze notitie kan worden bewerkt of verwijderd";
        this.changeNoteClicked = false;
        //haal de kleur van de categorie op
        this.colorCategorie = "";
        //filter toepassen
        this.filterOn = false;
        this.filteredNotes = [];
        this.substring = "";
        this.notesWithSubstring = [];
        this.apiService = ApiService;
    }
    ngOnInit() {
    }
    //controleer of de ingegeven naam bestaat en ga de gegevens van die gebruiker ophalen  
    getUser() {
        this.apiService.getUser(this.loginUserName).subscribe((data) => {
            console.log(data);
            this.activeUser = data;
            if (this.activeUser.name === undefined) {
                this.userExists = false;
                this.message1 = "Gebruiker " + this.loginUserName + " is niet gekend!  Probeer opnieuw of maak een account aan.";
                return;
            }
            else {
                this.userExists = true;
                this.message0 = "Welkom " + this.activeUser.name;
                this.loginUserName = "";
            }
            this.apiService.getCategoriesOfUser(this.activeUser.id).subscribe((data) => {
                console.log(data);
                this.categoriesOfUser = data;
                if (data.length == 0) {
                    //this.categoryListEmpty = true;
                    this.message2 = "U moet eerst een categorie aanmaken om een nieuwe notitie te kunnen toevoegen.";
                }
                else {
                    //this.categoryListEmpty = false;
                    this.message2 = "";
                }
            });
            this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data) => {
                console.log(data);
                //notesOfUser is de lijst met alle notities van de gebruiker
                this.notesOfUser = data;
                //notes is de lijst met weer te geven notities
                this.notes = data;
                if (data.length == 0) {
                    this.message1 = "U heeft nog geen notities om weer te geven.";
                }
                else {
                    //this.categoryListEmpty = false;
                    this.message1 = "";
                }
            });
        });
    }
    //velden voor de nieuwe account weergeven
    addUserShowInputField() {
        this.addUserClicked = true;
        this.newUserName = this.loginUserName;
        this.loginUserName = "";
    }
    //gebruiker toevoegen
    addUser() {
        this.loginUserName = "";
        this.apiService.addUser(this.newUserName).subscribe((error) => {
            console.log(error);
            //zonder fout is de gebruiker geregistreerd
            if (error != "User already exists") {
                this.message1 = "U bent geregistreerd, geef uw gebruikersnaam in om in te loggen.";
                this.loginUserName = this.newUserName;
                this.addUserClicked = false;
                this.message2 = "Nieuwe gebruiker?  Maak een account aan.";
            }
            else {
                this.message2 = "Deze loginnaam bestaat al, gelieve een andere te kiezen.";
            }
        });
    }
    logOff() {
        this.setVariablesToInitValue();
    }
    deleteUser() {
        this.apiService.delUser(this.activeUser.id).subscribe((data) => {
            console.log(data);
        });
        this.setVariablesToInitValue();
    }
    setVariablesToInitValue() {
        //messages
        this.message0 = "Welkom bij notesApp";
        this.message1 = "Geef uw gebruikersnaam in om in te loggen.";
        this.message2 = "Nieuwe gebruiker?  Maak een account aan.";
        this.message3 = "Geef hier de naam van uw categorie in";
        this.message4 = "In welke kleur wilt u de categorie weergeven";
        this.message5 = "Vul hier uw notitie in";
        this.message6 = "Kies uw notitiecategorie";
        this.loginUserName = "";
        this.activeUser = null;
        //userExists is false wanneer loginUserName niet gekend is
        this.userExists = false;
        //categoriën van gebruiker
        this.categoriesOfUser = [];
        //notities van gebruiker
        this.notesOfUser = [];
        //lijst van weer te geven notities
        this.notes = [];
        //geselecteerde categorie staat standaard op -1: --- kies een categorie ---
        this.selectedFilterCategoryFilter = -1;
        //geselecteerde categorie staat standaard op -1: --- kies een categorie ---
        this.selectedNotesCategory = -1;
        //kleurlijst weergave categoriën
        this.categoryColor = "";
        //velden voor de nieuwe notitie weergeven
        this.addNoteClicked = false;
        this.noteContent = "";
        //velden voor de nieuwe account weergeven
        this.addUserClicked = false;
        this.newUserName = "";
        //velden nieuwe categorie weergeven
        this.addcategoryClicked = false;
        this.categoryDescriptionNew = "";
        //geselecteerde notitie om te bewerken of te verwijderen
        this.changeNoteClicked = false;
        //haal de kleur van de categorie op
        this.colorCategorie = "";
        //filter toepassen
        this.filterOn = false;
        this.filteredNotes = [];
        this.substring = "";
        this.notesWithSubstring = [];
    }
    //eenmaal ingelogd
    //velden nieuwe categorie weergeven
    setAddCategoryClicked(value) {
        this.addcategoryClicked = value;
    }
    //geselecteerde filter ophalen
    noteCategory(event) {
        this.selectedNotesCategory = event.target.value;
    }
    addCategory() {
        if (this.categoryColor == undefined) {
            this.message4 = "U moet een kleur selecteren";
            return;
        }
        if (this.categoryDescriptionNew == "") {
            this.message3 = "U heeft geen categorie ingegeven";
            return;
        }
        this.apiService.addCategoryForUser(this.activeUser.id, this.categoryDescriptionNew, this.categoryColor).subscribe((data) => {
            console.log(data);
            this.apiService.getCategoriesOfUser(this.activeUser.id).subscribe((data) => {
                console.log(data);
                this.categoriesOfUser = data;
                //als alles goed ging is de lijst nu niet meer leeg
                if (data.length == 0) {
                    //this.categoryListEmpty = true;
                    this.selectedNotesCategory = 1;
                    this.message1 = "U heeft nog geen notities om weer te geven.";
                    this.message2 = "U moet eerst een categorie aanmaken om een nieuwe notitie te kunnen toevoegen.";
                }
                else {
                    //this.categoryListEmpty = false;
                    this.message2 = "";
                    this.setAddCategoryClicked(false);
                    this.categoryDescriptionNew = "";
                }
            });
        });
    }
    //haal de kleur van de categorie op
    getColor(note) {
        this.categoriesOfUser.forEach(category => {
            if (category.id == note.categoryId) {
                this.colorCategorie = category.color;
            }
        });
        return this.colorCategorie;
    }
    //velden voor de nieuwe notitie weergeven
    setAddNoteClicked(value) {
        this.addNoteClicked = value;
    }
    addNote() {
        if (this.selectedNotesCategory == -1) {
            this.message6 = "U moet een categorie selecteren";
            return;
        }
        if (this.noteContent == "") {
            this.message5 = "Uw heeft geen notitie ingegeven";
            return;
        }
        this.apiService.addNoteForUser(this.activeUser.id, this.selectedNotesCategory, this.noteContent).subscribe((data) => {
            console.log(data);
            this.selectedNotesCategory = -1;
            this.noteContent = "";
            this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data) => {
                console.log(data);
                //notesOfUser is de lijst met alle notities van de gebruiker
                this.notesOfUser = data;
                //notes is de lijst met weer te geven notities
                this.notes = data;
                if (data.length == 0) {
                    this.message1 = "U heeft nog geen notities om weer te geven.";
                }
                else {
                    this.setAddNoteClicked(false);
                    this.message1 = "";
                }
            });
        });
    }
    //geselecteerde notitie om te bewerken of te verwijderen
    setChangeNoteClicked(value) {
        // this.noteContent = this.selectedNote.content
        // this.selectedNotesCategory = this.selectedNote.categoryId
        this.addNoteClicked = value;
        this.changeNoteClicked = value;
    }
    onNoteClick(note) {
        this.selectedNote = note;
        this.noteContent = note.content;
        this.selectedNotesCategory = note.categoryId;
    }
    changeNote() {
        if (this.selectedNotesCategory == -1) {
            this.message6 = "U moet een categorie selecteren";
            return;
        }
        if (this.noteContent == "") {
            this.message5 = "Uw heeft geen notitie ingegeven";
            return;
        }
        this.apiService.updateNoteOfUser(this.selectedNote.id, this.selectedNotesCategory, this.noteContent).subscribe((data) => {
            console.log(data);
            this.selectedNotesCategory = -1;
            this.noteContent = "";
            this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data) => {
                console.log(data);
                //notesOfUser is de lijst met alle notities van de gebruiker
                this.notesOfUser = data;
                //notes is de lijst met weer te geven notities
                this.notes = data;
                if (data.length == 0) {
                    this.message1 = "Oeps, hier ging iets mis.";
                }
                else {
                    this.setAddNoteClicked(false);
                    this.setChangeNoteClicked(false);
                    this.message1 = "";
                }
            });
        });
    }
    deleteNote() {
        this.apiService.delNoteOfUser(this.selectedNote.id).subscribe((data) => {
            console.log(data);
            this.apiService.getNotesOfUser(this.activeUser.id).subscribe((data) => {
                console.log(data);
                //notesOfUser is de lijst met alle notities van de gebruiker
                this.notesOfUser = data;
                //notes is de lijst met weer te geven notities
                this.notes = data;
                if (data.length == 0) {
                    this.message1 = "U heeft nog geen notities om weer te geven.";
                }
                else {
                    this.setAddNoteClicked(false);
                    this.message1 = "";
                }
            });
        });
    }
    //Filters wissen
    //lijst notities tonen
    showAllNotes() {
        this.notes = this.notesOfUser;
        this.filterOn = false;
        this.selectedFilterCategoryFilter = -1;
    }
    //Filter op categorie
    //filter toepassen
    filterCategory(event) {
        this.selectedFilterCategoryFilter = event.target.value;
    }
    filterNotes() {
        this.substring = "";
        //if(this.selectedFilterCategoryFilter == -1) {
        //  this.filterOn=false;
        //  return;
        //}
        //if(this.filterOn) {
        //  this.notes= this.notesOfUser;
        //}
        this.notesOfUser.forEach(note => {
            if (note.categoryId == this.selectedFilterCategoryFilter) {
                this.filteredNotes.push(note);
            }
        });
        this.notes = this.filteredNotes;
        //this.filterOn=true;
        this.filteredNotes = [];
    }
    //Filter op substring
    searchNotesWithSubstring() {
        this.notes.forEach(note => {
            if (note.content.includes(this.substring)) {
                this.notesWithSubstring.push(note);
            }
        });
        this.notes = this.notesWithSubstring;
        //this.substring="";
        this.notesWithSubstring = [];
    }
    //voor een eventuele administrator
    //gebruikers
    getUsers() {
        this.apiService.getUsers().subscribe((data) => {
            console.log(data);
        });
    }
    //categoriën
    getCategories() {
        this.apiService.getCategories().subscribe((data) => {
            console.log(data);
        });
    }
    //notities
    getNotes() {
        this.apiService.getNotes().subscribe((data) => {
            console.log(data);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 4, consts: [[2, "width", "200px", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["loginContent", ""], ["activeUserContent", ""], ["type", "text", 2, "width", "196px", 3, "ngModel", "ngModelChange"], ["noNewUser", ""], ["newUser", ""], ["valign", "top"], [2, "width", "200px"], ["noNewNote", ""], ["newNote", ""], ["noNewCategory", ""], ["newCategory", ""], [2, "width", "200px", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", "-1"], [3, "ngStyle", "value", 4, "ngFor", "ngForOf"], [2, "width", "200px", 3, "disabled", "click"], [2, "width", "196px", 3, "ngModel", "disabled", "ngModelChange"], ["valign", "top", 2, "width", "200px"], ["notesToShow", ""], ["noNotesToShow", ""], ["rows", "10", "cols", "30", 2, "width", "300px", "height", "200px", "text-align", "left", 3, "ngModel", "ngModelChange"], [2, "width", "200px", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["noNewNoteButton", ""], ["newNoteButton", ""], [3, "value"], [2, "width", "196px", 3, "colorPicker", "colorPickerChange"], [3, "ngStyle", "value"], [4, "ngFor", "ngForOf"], ["readonly", "", "rows", "10", "cols", "30", 2, "width", "300px", "height", "200px", "text-align", "left", 3, "ngStyle", "click"], [4, "ngIf"], ["style", "width: 200px", 3, "disabled", "click", 4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() { return ctx.getNotes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "alle notities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() { return ctx.getCategories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "alle categori\u00EBn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "alle gebruikers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_ng_container_9_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_ng_template_10_Template, 17, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_ng_template_12_Template, 74, 17, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userExists)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ruben\Toegepaste informatica\cursussen\Programmeren5\ProjectApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map