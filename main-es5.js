function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: APIService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIService", function () {
      return APIService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var APIService = function APIService(http) {
      var _this = this;

      _classCallCheck(this, APIService);

      this.http = http; //
      //bewerkingen op "/users"
      //
      //haal de lijst van alle gebruikers op

      this.getUsers = function () {
        return _this.http.get(_this.route + "/users");
      }; //voeg een gebruiker toe


      this.addUser = function (userName) {
        return _this.http.post(_this.route + "/users", {
          userName: userName
        });
      }; //haal een gebruiker op


      this.getUser = function (userName) {
        return _this.http.get(_this.route + "/users/" + userName);
      }; //verwijder een gebruiker


      this.deleteUser = function (userName) {
        return _this.http["delete"](_this.route + "/users?userName=" + userName);
      }; //
      //bewerkingen op "/notescategory"
      //
      //haal de lijst van alle categorien op


      this.getCategories = function () {
        return _this.http.get(_this.route + "/category");
      }; //haal de lijst van alle categorien van een gebruiker op


      this.getCategoriesFromUser = function (userName) {
        return _this.http.get(_this.route + "/users/" + userName + "/category");
      }; //voeg een categorie toe voor een bepaalde gebruiker


      this.addCategory = function (userName, description) {
        return _this.http.post(_this.route + "/users/" + userName + "/category", {
          description: description
        });
      }; //
      //bewerkingen op "/notes"
      //
      //haal de lijst van alle notities op voor een bepaalde gebruiker
      //getNotesFromUser = (userName: string) => {
      // return this.http.get(this.route + "/users/"+userName+"/notes");
      //}
      //haal de lijst van alle notities op voor een bepaalde gebruiker


      this.getNotesFromUser = function (userName, searchContent, category) {
        return _this.http.get(_this.route + "/users/" + userName + "/notes?searchContent=" + searchContent + "&category=" + category);
      }; //voeg een notitie toe een bepaalde gebruiker


      this.addNoteForUser = function (userName, content, category) {
        return _this.http.post(_this.route + "/users/" + userName + "/notes", {
          content: content,
          category: category
        });
      }; //haal de lijst van alle notities op voor een bepaalde gebruiker


      this.getNotesWithSubstringFromUser = function (userName, searchContent, category) {
        return _this.http.get(_this.route + "/users/" + userName + "/notes?searchContent=" + searchContent + "&category=" + category);
      };

      this.route = 'https://jensjorisdecorte-backend-example-4.glitch.me';
    };

    APIService.ɵfac = function APIService_Factory(t) {
      return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: APIService,
      factory: APIService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(apiService) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

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
        this.filterCategorie = "prive"; //
        //bewerkingen op "/users"
        //
        //haal de lijst van alle gebruikers op

        this.lijstGebruikers = function () {
          _this2.apiServiceApp.getUsers().subscribe(function (data) {
            console.log(data);
            _this2.gebruikers = data;
          });
        }; //voeg een gebruiker toe


        this.toevoegenGebruiker = function () {
          _this2.apiServiceApp.addUser(_this2.nieuweGebruiker).subscribe(function (data) {
            console.log(data);
            if (data.error == null) _this2.messageGebruikerToevoegen = data.success;else _this2.messageGebruikerToevoegen = data.error;
          });

          _this2.nieuweGebruiker = "";
        }; //checkt of een gebruiker reeds bestaat


        this.bestaatGebruiker = function () {
          _this2.apiServiceApp.getUser(_this2.gebruiker).subscribe(function (data) {
            console.log(data);
            if (data.error == null) _this2.messageGebruikerBestaat = data.success;else _this2.messageGebruikerBestaat = data.error;
          });

          _this2.gebruiker = "";
        }; //verwijder een gebruiker


        this.verwijderenGebruiker = function () {
          _this2.apiServiceApp.deleteUser(_this2.naamVerwijderen).subscribe(function (data) {
            console.log(data);
            if (data.error == null) _this2.messageGebruikerVerwijderen = data.success;else _this2.messageGebruikerVerwijderen = data.error;
          });

          _this2.lijstGebruikers();

          _this2.naamVerwijderen = "";
        }; //
        //bewerkingen op "/notescategory"
        //
        //haal de lijst van alle categorien op


        this.lijstCategorie = function () {
          _this2.apiServiceApp.getCategories().subscribe(function (data) {
            console.log(data);
            _this2.categorien = data;
          });
        }; //haal de lijst van alle categorien op


        this.lijstCategorienVanGebruiker = function () {
          _this2.apiServiceApp.getCategoriesFromUser(_this2.actieveGebruiker).subscribe(function (data) {
            console.log(data);
            _this2.categorienVanGebruiker = data;
          });
        }; //voeg een categorie toe


        this.toevoegenCategorie = function () {
          _this2.apiServiceApp.addCategory(_this2.naamCategorieToevoegen, _this2.omschrijvingCategorieToevoegen).subscribe(function (data) {
            console.log(data);
            if (data.error == null) _this2.messageGebruikerBestaat = data.success;else _this2.messageGebruikerBestaat = data.error;
          });
        }; //
        //bewerkingen op "/Notes"
        //
        //haal de lijst van alle notities op


        this.lijstNotities = function () {
          _this2.apiServiceApp.getNotes().subscribe(function (data) {
            console.log(data);
            _this2.notities = data;
          });
        }; //haal de lijst van alle notities op voor een bepaalde gebruiker


        this.lijstNotitiesVanGebruiker = function () {
          _this2.notitiesVanGebruikerFilterenOpCategorie(); //this.apiServiceApp.getNotesFromUser(this.actieveGebruiker).subscribe((data: Notitie[]) => {
          // console.log(data);
          //this.notitiesGebruiker = data;
          //});


          _this2.naamNotitieTonen = "";
        }; //voeg een notitie toe een bepaalde gebruiker


        this.toevoegenNotitieVoorGebruiker = function () {
          _this2.apiServiceApp.addNoteForUser(_this2.naamNotitieToevoegen, _this2.inhoudNotitieToevoegen, _this2.categorieNotitieToevoegen).subscribe(function (data) {
            console.log(data);
          });

          _this2.naamNotitieToevoegen = "";
          _this2.inhoudNotitieToevoegen = "";
          _this2.categorieNotitieToevoegen = "";
        };

        this.apiServiceApp = apiService; //this.vulDatabaseMetMockData();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "notitiesVanGebruikerDieZoekStringBevatten",
        value: function notitiesVanGebruikerDieZoekStringBevatten() {
          this.notitiesVanGebruikerFilterenOpCategorie(); // this.apiServiceApp.getNotesWithSubstringFromUser(this.actieveGebruiker, this.zoekString).subscribe((data: Notitie[]) => {
          //   console.log(data);
          //  this.gevondenNotities = data;
          // });

          this.zoekString = "";
        }
      }, {
        key: "notitiesVanGebruikerFilterenOpCategorie",
        value: function notitiesVanGebruikerFilterenOpCategorie() {
          var _this3 = this;

          this.apiServiceApp.getNotesWithSubstringFromUser(this.actieveGebruiker, this.zoekString, this.filterCategorie).subscribe(function (data) {
            console.log(data);
            _this3.gevondenNotitiesFilter = data;
          });
        } //nep data om de functies te controleren

      }, {
        key: "vulDatabaseMetMockData",
        value: function vulDatabaseMetMockData() {
          //gebruikers toevoegen
          this.apiServiceApp.addUser("Gina").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Chantal").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Sonja").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Thierry").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Karel").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Tim").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Marie").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Jonathan").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Ilse").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Isabel").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Peter").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("David").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Geert").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Tom").subscribe(function (data) {
            console.log(data);
          }); //categorien toevoegen

          this.apiServiceApp.addCategory("Gina", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addCategory("Gina", "dringend").subscribe(function (data) {
            console.log(data);
          }); //notities toevoegen

          this.apiServiceApp.addNoteForUser("Gina", "bureau kuisen", "dringend").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Gina", "facebook checken", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Gina", "boodschappen doen", "prive").subscribe(function (data) {
            console.log(data);
          }); //categorien toevoegen

          this.apiServiceApp.addCategory("Chantal", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addCategory("Chantal", "dringend").subscribe(function (data) {
            console.log(data);
          }); //notities toevoegen

          this.apiServiceApp.addNoteForUser("Chantal", "bureau kuisen", "dringend").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Chantal", "facebook checken", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Chantal", "dochter bellen", "prive").subscribe(function (data) {
            console.log(data);
          }); //categorien toevoegen

          this.apiServiceApp.addCategory("Sonja", "dringend").subscribe(function (data) {
            console.log(data);
          }); //notities toevoegen

          this.apiServiceApp.addNoteForUser("Sonja", "facturen bezorgen", "dringend").subscribe(function (data) {
            console.log(data);
          }); //categorien toevoegen

          this.apiServiceApp.addCategory("Karel", "prive").subscribe(function (data) {
            console.log(data);
          }); //notities toevoegen

          this.apiServiceApp.addNoteForUser("Karel", "personeel beoordelen", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Karel", "avondje uit", "prive").subscribe(function (data) {
            console.log(data);
          }); //categorien toevoegen

          this.apiServiceApp.addCategory("Marie", "dringend").subscribe(function (data) {
            console.log(data);
          }); //notities toevoegen

          this.apiServiceApp.addNoteForUser("Marie", "les gaan volgen", "dringend").subscribe(function (data) {
            console.log(data);
          }); //categorien toevoegen

          this.apiServiceApp.addCategory("Tom", "prive").subscribe(function (data) {
            console.log(data);
          }); //notities toevoegen

          this.apiServiceApp.addNoteForUser("Tom", "vrouw bellen", "prive").subscribe(function (data) {
            console.log(data);
          }); //categorien toevoegen

          this.apiServiceApp.addCategory("Ilse", "dringend").subscribe(function (data) {
            console.log(data);
          }); //notities toevoegen

          this.apiServiceApp.addNoteForUser("Ilse", "infobrochure verspreiden", "dringend").subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_div_3_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var category_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onChangeCategory(category_r2.description, $event.target.checked);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.description, " ");
      }
    }

    function HomeComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var note_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r5, "\n");
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(ApiService, formBuilder) {
        _classCallCheck(this, HomeComponent);

        this.formBuilder = formBuilder; //lijst van users in de db

        this.users = []; //lijst van notities voor user al dan niet met filter

        this.notes = [];
        this.notesFilter = [];
        this.notesNaFilter = []; //lijst van notities voor user al dan niet met filter

        this.categories = [];
        this.geenFilterSelectie = true; //ingelogde user

        this.activeUser = "Gina";
        this.filters = [];
        this.apiService = ApiService;
      }

      _createClass(HomeComponent, [{
        key: "onChangeCategory",
        value: function onChangeCategory(description, isChecked) {
          var categories = this.formCategory.controls.description;

          if (isChecked) {
            categories.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](description));
          } else {
            var index = categories.controls.findIndex(function (x) {
              return x.value === description;
            });
            categories.removeAt(index);
          }
        }
      }, {
        key: "onChangeNote",
        value: function onChangeNote(content, isChecked) {
          var notes = this.formNote.controls.content;

          if (isChecked) {
            notes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](content));
          } else {
            var index = notes.controls.findIndex(function (x) {
              return x.value === content;
            });
            notes.removeAt(index);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.OphalenCategorien();
          this.OphalenNotities(); //Catergorie

          this.formCategory = this.formBuilder.group({
            description: this.formBuilder.array([])
          }); //Notities

          this.formNote = this.formBuilder.group({
            content: this.formBuilder.array([])
          });
        }
      }, {
        key: "submitCategory",
        value: function submitCategory() {
          var _this4 = this;

          this.notesNaFilter = [];
          this.filters = this.formCategory.value.description;
          this.OphalenNotitie(this.filters);
          this.notesFilter.forEach(function (note) {
            _this4.notesNaFilter.push(note.content);
          });
          console.log(this.formCategory.value.description);
        }
      }, {
        key: "submitNote",
        value: function submitNote() {
          console.log(this.formNote.value.content);
        }
      }, {
        key: "OphalenCategorien",
        value: function OphalenCategorien() {
          var _this5 = this;

          this.apiService.getCategoriesFromUser(this.activeUser).subscribe(function (data) {
            console.log(data);
            _this5.categories = data;
          });
        }
      }, {
        key: "OphalenNotities",
        value: function OphalenNotities() {
          var _this6 = this;

          this.apiService.getNotesFromUser(this.activeUser, "", "").subscribe(function (data) {
            console.log(data);
            _this6.notes = data;
          });
        }
      }, {
        key: "OphalenNotitie",
        value: function OphalenNotitie(filter) {
          var _this7 = this;

          this.apiService.getNotesFromUser(this.activeUser, "", filter).subscribe(function (data) {
            //console.log(data);   
            _this7.notesFilter = data;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 4,
      consts: [[3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "change"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_2_listener() {
            return ctx.submitCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter toepassen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 2, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welkom ", ctx.activeUser, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notesNaFilter);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //<!--
    //
    //
    //hierboven code om de dbconnectie te testen
    //
    //
    //-->


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(apiService, router) {
        var _this8 = this;

        _classCallCheck(this, LoginComponent);

        this.apiService = apiService;
        this.router = router;
        this.geldigeGebruiker = "";
        this.gebruikersnaam = "Tom"; //<!--
        //
        //
        //hieronder code om de dbconnectie te testen
        //
        //
        //-->

        this.gebruikers = [];

        this.lijstGebruikers = function () {
          _this8.apiServiceApp.getUsers().subscribe(function (data) {
            console.log(data);
            _this8.gebruikers = data;
          });
        };

        this.apiServiceApp = apiService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //checkt of een gebruiker reeds bestaat

      }, {
        key: "IsGeldigeGebruiker",
        value: function IsGeldigeGebruiker() {
          var _this9 = this;

          this.apiServiceApp.getUser(this.gebruikersnaam).subscribe(function (data) {
            alert("log");
            console.log(data);

            if (data.error == null) {
              alert("if");
              _this9.geldigeGebruiker = data.success;
            } else {
              alert("else");
              _this9.geldigeGebruiker = data.error;
            }

            alert(_this9.geldigeGebruiker);
          });
          alert("we zijn hier");
        }
      }, {
        key: "Inloggen",
        value: function Inloggen(geldigeGebruiker) {
          if (geldigeGebruiker) {
            alert("we zijn er");
            this.router.navigate(["/home"]);
          } else {
            //boodschap dat de gebruiker niet bestaat
            alert(this.gebruikersnaam + "is niet gekend");
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 2,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loginpage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Ruben\Toegepaste informatica\cursussen\Programmeren5\ProjectApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map