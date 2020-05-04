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
        //voeg een gebruiker toe
        this.addUser = (userName) => {
            return this.http.post(this.route + "/users", { userName: userName });
        };
        //haal een gebruiker op
        this.getUser = (userName) => {
            return this.http.get(this.route + "/users/" + userName);
        };
        //verwijder een gebruiker
        this.deleteUser = (userName) => {
            return this.http.delete(this.route + "/users?userName=" + userName);
        };
        //
        //bewerkingen op "/notescategory"
        //
        //haal de lijst van alle categorien op
        this.getCategories = () => {
            return this.http.get(this.route + "/category");
        };
        //haal de lijst van alle categorien van een gebruiker op
        this.getCategoriesFromUser = (userName) => {
            return this.http.get(this.route + "/users/" + userName + "/category");
        };
        //voeg een categorie toe voor een bepaalde gebruiker
        this.addCategory = (userName, description) => {
            return this.http.post(this.route + "/users/" + userName + "/category", { description: description });
        };
        //
        //bewerkingen op "/notes"
        //
        //haal de lijst van alle notities op voor een bepaalde gebruiker
        //getNotesFromUser = (userName: string) => {
        // return this.http.get(this.route + "/users/"+userName+"/notes");
        //}
        //haal de lijst van alle notities op voor een bepaalde gebruiker
        this.getNotesFromUser = (userName, searchContent, category) => {
            return this.http.get(this.route + "/users/" + userName + "/notes?searchContent=" + searchContent + "&category=" + category);
        };
        //voeg een notitie toe een bepaalde gebruiker
        this.addNoteForUser = (userName, content, category) => {
            return this.http.post(this.route + "/users/" + userName + "/notes", { content: content, category: category });
        };
        //haal de lijst van alle notities op voor een bepaalde gebruiker
        this.getNotesWithSubstringFromUser = (userName, searchContent, category) => {
            return this.http.get(this.route + "/users/" + userName + "/notes?searchContent=" + searchContent + "&category=" + category);
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
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
        //
        //bewerkingen op "/users"
        //
        //haal de lijst van alle gebruikers op
        this.lijstGebruikers = () => {
            this.apiServiceApp.getUsers().subscribe((data) => {
                console.log(data);
                this.gebruikers = data;
            });
        };
        //voeg een gebruiker toe
        this.toevoegenGebruiker = () => {
            this.apiServiceApp.addUser(this.nieuweGebruiker).subscribe((data) => {
                console.log(data);
                if (data.error == null)
                    this.messageGebruikerToevoegen = data.success;
                else
                    this.messageGebruikerToevoegen = data.error;
            });
            this.nieuweGebruiker = "";
        };
        //checkt of een gebruiker reeds bestaat
        this.bestaatGebruiker = () => {
            this.apiServiceApp.getUser(this.gebruiker).subscribe((data) => {
                console.log(data);
                if (data.error == null)
                    this.messageGebruikerBestaat = data.success;
                else
                    this.messageGebruikerBestaat = data.error;
            });
            this.gebruiker = "";
        };
        //verwijder een gebruiker
        this.verwijderenGebruiker = () => {
            this.apiServiceApp.deleteUser(this.naamVerwijderen).subscribe((data) => {
                console.log(data);
                if (data.error == null)
                    this.messageGebruikerVerwijderen = data.success;
                else
                    this.messageGebruikerVerwijderen = data.error;
            });
            this.lijstGebruikers();
            this.naamVerwijderen = "";
        };
        //
        //bewerkingen op "/notescategory"
        //
        //haal de lijst van alle categorien op
        this.lijstCategorie = () => {
            this.apiServiceApp.getCategories().subscribe((data) => {
                console.log(data);
                this.categorien = data;
            });
        };
        //haal de lijst van alle categorien op
        this.lijstCategorienVanGebruiker = () => {
            this.apiServiceApp.getCategoriesFromUser(this.actieveGebruiker).subscribe((data) => {
                console.log(data);
                this.categorienVanGebruiker = data;
            });
        };
        //voeg een categorie toe
        this.toevoegenCategorie = () => {
            this.apiServiceApp.addCategory(this.naamCategorieToevoegen, this.omschrijvingCategorieToevoegen).subscribe((data) => {
                console.log(data);
                if (data.error == null)
                    this.messageGebruikerBestaat = data.success;
                else
                    this.messageGebruikerBestaat = data.error;
            });
        };
        //
        //bewerkingen op "/Notes"
        //
        //haal de lijst van alle notities op
        this.lijstNotities = () => {
            this.apiServiceApp.getNotes().subscribe((data) => {
                console.log(data);
                this.notities = data;
            });
        };
        //haal de lijst van alle notities op voor een bepaalde gebruiker
        this.lijstNotitiesVanGebruiker = () => {
            this.notitiesVanGebruikerFilterenOpCategorie();
            //this.apiServiceApp.getNotesFromUser(this.actieveGebruiker).subscribe((data: Notitie[]) => {
            // console.log(data);
            //this.notitiesGebruiker = data;
            //});
            this.naamNotitieTonen = "";
        };
        //voeg een notitie toe een bepaalde gebruiker
        this.toevoegenNotitieVoorGebruiker = () => {
            this.apiServiceApp.addNoteForUser(this.naamNotitieToevoegen, this.inhoudNotitieToevoegen, this.categorieNotitieToevoegen).subscribe((data) => {
                console.log(data);
            });
            this.naamNotitieToevoegen = "";
            this.inhoudNotitieToevoegen = "";
            this.categorieNotitieToevoegen = "";
        };
        this.apiServiceApp = apiService;
        //this.vulDatabaseMetMockData();
    }
    ngOnInit() {
    }
    notitiesVanGebruikerDieZoekStringBevatten() {
        this.notitiesVanGebruikerFilterenOpCategorie();
        // this.apiServiceApp.getNotesWithSubstringFromUser(this.actieveGebruiker, this.zoekString).subscribe((data: Notitie[]) => {
        //   console.log(data);
        //  this.gevondenNotities = data;
        // });
        this.zoekString = "";
    }
    notitiesVanGebruikerFilterenOpCategorie() {
        this.apiServiceApp.getNotesWithSubstringFromUser(this.actieveGebruiker, this.zoekString, this.filterCategorie).subscribe((data) => {
            console.log(data);
            this.gevondenNotitiesFilter = data;
        });
    }
    //nep data om de functies te controleren
    vulDatabaseMetMockData() {
        //gebruikers toevoegen
        this.apiServiceApp.addUser("Gina").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Chantal").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Sonja").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Thierry").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Karel").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Tim").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Marie").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Jonathan").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addUser("Ilse").subscribe((data) => {
            console.log(data);
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
        });
        //categorien toevoegen
        this.apiServiceApp.addCategory("Gina", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addCategory("Gina", "dringend").subscribe((data) => {
            console.log(data);
        });
        //notities toevoegen
        this.apiServiceApp.addNoteForUser("Gina", "bureau kuisen", "dringend").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Gina", "facebook checken", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Gina", "boodschappen doen", "prive").subscribe((data) => {
            console.log(data);
        });
        //categorien toevoegen
        this.apiServiceApp.addCategory("Chantal", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addCategory("Chantal", "dringend").subscribe((data) => {
            console.log(data);
        });
        //notities toevoegen
        this.apiServiceApp.addNoteForUser("Chantal", "bureau kuisen", "dringend").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Chantal", "facebook checken", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Chantal", "dochter bellen", "prive").subscribe((data) => {
            console.log(data);
        });
        //categorien toevoegen
        this.apiServiceApp.addCategory("Sonja", "dringend").subscribe((data) => {
            console.log(data);
        });
        //notities toevoegen
        this.apiServiceApp.addNoteForUser("Sonja", "facturen bezorgen", "dringend").subscribe((data) => {
            console.log(data);
        });
        //categorien toevoegen
        this.apiServiceApp.addCategory("Karel", "prive").subscribe((data) => {
            console.log(data);
        });
        //notities toevoegen
        this.apiServiceApp.addNoteForUser("Karel", "personeel beoordelen", "prive").subscribe((data) => {
            console.log(data);
        });
        this.apiServiceApp.addNoteForUser("Karel", "avondje uit", "prive").subscribe((data) => {
            console.log(data);
        });
        //categorien toevoegen
        this.apiServiceApp.addCategory("Marie", "dringend").subscribe((data) => {
            console.log(data);
        });
        //notities toevoegen
        this.apiServiceApp.addNoteForUser("Marie", "les gaan volgen", "dringend").subscribe((data) => {
            console.log(data);
        });
        //categorien toevoegen
        this.apiServiceApp.addCategory("Tom", "prive").subscribe((data) => {
            console.log(data);
        });
        //notities toevoegen
        this.apiServiceApp.addNoteForUser("Tom", "vrouw bellen", "prive").subscribe((data) => {
            console.log(data);
        });
        //categorien toevoegen
        this.apiServiceApp.addCategory("Ilse", "dringend").subscribe((data) => {
            console.log(data);
        });
        //notities toevoegen
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const category_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onChangeCategory(category_r2.description, $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.description, " ");
} }
function HomeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r5, "\n");
} }
class HomeComponent {
    constructor(ApiService, formBuilder) {
        this.formBuilder = formBuilder;
        //lijst van users in de db
        this.users = [];
        //lijst van notities voor user al dan niet met filter
        this.notes = [];
        this.notesFilter = [];
        this.notesNaFilter = [];
        //lijst van notities voor user al dan niet met filter
        this.categories = [];
        this.geenFilterSelectie = true;
        //ingelogde user
        this.activeUser = "Gina";
        this.filters = [];
        this.apiService = ApiService;
    }
    onChangeCategory(description, isChecked) {
        const categories = this.formCategory.controls.description;
        if (isChecked) {
            categories.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](description));
        }
        else {
            const index = categories.controls.findIndex(x => x.value === description);
            categories.removeAt(index);
        }
    }
    onChangeNote(content, isChecked) {
        const notes = this.formNote.controls.content;
        if (isChecked) {
            notes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](content));
        }
        else {
            const index = notes.controls.findIndex(x => x.value === content);
            notes.removeAt(index);
        }
    }
    ngOnInit() {
        this.OphalenCategorien();
        this.OphalenNotities();
        //Catergorie
        this.formCategory = this.formBuilder.group({
            description: this.formBuilder.array([])
        });
        //Notities
        this.formNote = this.formBuilder.group({
            content: this.formBuilder.array([])
        });
    }
    submitCategory() {
        this.notesNaFilter = [];
        this.filters = this.formCategory.value.description;
        this.OphalenNotitie(this.filters);
        this.notesFilter.forEach((note) => {
            this.notesNaFilter.push(note.content);
        });
        console.log(this.formCategory.value.description);
    }
    submitNote() {
        console.log(this.formNote.value.content);
    }
    OphalenCategorien() {
        this.apiService.getCategoriesFromUser(this.activeUser).subscribe((data) => {
            console.log(data);
            this.categories = data;
        });
    }
    OphalenNotities() {
        this.apiService.getNotesFromUser(this.activeUser, "", "").subscribe((data) => {
            console.log(data);
            this.notes = data;
        });
    }
    OphalenNotitie(filter) {
        this.apiService.getNotesFromUser(this.activeUser, "", filter).subscribe((data) => {
            //console.log(data);   
            this.notesFilter = data;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 4, consts: [[3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "change"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_2_listener() { return ctx.submitCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter toepassen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welkom ", ctx.activeUser, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notesNaFilter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




//<!--
//
//
//hierboven code om de dbconnectie te testen
//
//
//-->
class LoginComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.geldigeGebruiker = "";
        this.gebruikersnaam = "Tom";
        //<!--
        //
        //
        //hieronder code om de dbconnectie te testen
        //
        //
        //-->
        this.gebruikers = [];
        this.lijstGebruikers = () => {
            this.apiServiceApp.getUsers().subscribe((data) => {
                console.log(data);
                this.gebruikers = data;
            });
        };
        this.apiServiceApp = apiService;
    }
    ngOnInit() {
    }
    //checkt of een gebruiker reeds bestaat
    IsGeldigeGebruiker() {
        this.apiServiceApp.getUser(this.gebruikersnaam).subscribe((data) => {
            alert("log");
            console.log(data);
            if (data.error == null) {
                alert("if");
                this.geldigeGebruiker = data.success;
            }
            else {
                alert("else");
                this.geldigeGebruiker = data.error;
            }
            alert(this.geldigeGebruiker);
        });
        alert("we zijn hier");
    }
    Inloggen(geldigeGebruiker) {
        if (geldigeGebruiker) {
            alert("we zijn er");
            this.router.navigate(["/home"]);
        }
        else {
            //boodschap dat de gebruiker niet bestaat
            alert(this.gebruikersnaam + "is niet gekend");
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loginpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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