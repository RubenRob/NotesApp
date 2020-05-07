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
      }; //haal een gebruiker op


      this.getUser = function (userName) {
        return _this.http.get(_this.route + "/users/" + userName);
      }; //voeg een gebruiker toe


      this.addUser = function (userName) {
        return _this.http.post(_this.route + "/users", {
          userName: userName
        });
      }; //verwijder een gebruiker


      this.delUser = function (userId) {
        return _this.http["delete"](_this.route + "/users?userId=" + userId);
      }; //
      //bewerkingen op "/Categories"
      //
      //haal de lijst van alle categorien op


      this.getCategories = function () {
        return _this.http.get(_this.route + "/categories");
      }; //haal de lijst van alle categorien van een gebruiker op


      this.getCategoriesOfUser = function (userId) {
        return _this.http.get(_this.route + "/users/" + userId + "/categories");
      }; //voeg een categorie toe voor een bepaalde gebruiker


      this.addCategoriesForUser = function (userId, description) {
        return _this.http.post(_this.route + "/users/" + userId + "/categories", {
          description: description
        });
      }; //verwijder een gebruiker


      this.delCategoriesOfUser = function (categoryId) {
        return _this.http["delete"](_this.route + "/categories?categoryId=" + categoryId);
      }; //
      //bewerkingen op "/notes"
      //
      //haal de lijst van alle notities op


      this.getNotes = function () {
        return _this.http.get(_this.route + "/notes");
      }; //haal de lijst van alle notities van een gebruiker op


      this.getNotesOfUser = function (userId) {
        return _this.http.get(_this.route + "/users/" + userId + "/notes");
      }; //haal de lijst van alle notities van een gebruiker op


      this.getNotesOfUserWithCategoryFilter = function (userId, categoryId) {
        return _this.http.get(_this.route + "/users/" + userId + "/categories/" + categoryId + "/notes");
      }; //voeg een notitie toe voor een bepaalde gebruiker


      this.addNoteForUser = function (userId, categoryId, content) {
        return _this.http.post(_this.route + "/users/" + userId + "/categories/" + categoryId + "/notes", {
          content: content
        });
      }; //voeg een notitie toe voor een bepaalde gebruiker


      this.delNoteOfUser = function (noteId) {
        return _this.http["delete"](_this.route + "/notes?noteId=" + noteId);
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
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
        this.filterCategorie = "prive";
        this.apiServiceApp = apiService; //this.vulDatabaseMetMockDataUsers();
        //this.vulDatabaseMetMockDataCategories();
        //this.vulDatabaseMetMockDataNotes();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //nep data om de functies te controleren

      }, {
        key: "vulDatabaseMetMockDataUsers",
        value: function vulDatabaseMetMockDataUsers() {
          var _this2 = this;

          this.apiServiceApp.addUser("Gina").subscribe(function (data) {
            console.log(data);

            _this2.apiServiceApp.getUser("Gina").subscribe(function (data) {
              _this2.userid = data.id;

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "prive").subscribe(function (data) {
                console.log(data);
              });

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "dringend").subscribe(function (data) {
                console.log(data);
              });
            });
          });
          this.apiServiceApp.addUser("Chantal").subscribe(function (data) {
            console.log(data);

            _this2.apiServiceApp.getUser("Chantal").subscribe(function (data) {
              _this2.userid = data.id;

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "prive").subscribe(function (data) {
                console.log(data);
              });

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "dringend").subscribe(function (data) {
                console.log(data);
              });
            });
          });
          this.apiServiceApp.addUser("Sonja").subscribe(function (data) {
            console.log(data);

            _this2.apiServiceApp.getUser("Sonja").subscribe(function (data) {
              _this2.userid = data.id;

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "dringend").subscribe(function (data) {
                console.log(data);
              });
            });
          });
          this.apiServiceApp.addUser("Thierry").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Karel").subscribe(function (data) {
            console.log(data);

            _this2.apiServiceApp.getUser("Karel").subscribe(function (data) {
              _this2.userid = data.id;

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "prive").subscribe(function (data) {
                console.log(data);
              });
            });
          });
          this.apiServiceApp.addUser("Tim").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Marie").subscribe(function (data) {
            console.log(data);

            _this2.apiServiceApp.getUser("Marie").subscribe(function (data) {
              _this2.userid = data.id;

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "dringend").subscribe(function (data) {
                console.log(data);
              });
            });
          });
          this.apiServiceApp.addUser("Jonathan").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addUser("Ilse").subscribe(function (data) {
            console.log(data);

            _this2.apiServiceApp.getUser("Ilse").subscribe(function (data) {
              _this2.userid = data.id;

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "dringend").subscribe(function (data) {
                console.log(data);
              });
            });
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

            _this2.apiServiceApp.getUser("Tom").subscribe(function (data) {
              _this2.userid = data.id;

              _this2.apiServiceApp.addCategoriesForUser(_this2.userid, "prive").subscribe(function (data) {
                console.log(data);
              });
            });
          });
        }
      }, {
        key: "vulDatabaseMetMockDataCategories",
        value: function vulDatabaseMetMockDataCategories() {}
      }, {
        key: "vulDatabaseMetMockDataNotes",
        value: function vulDatabaseMetMockDataNotes() {
          this.apiServiceApp.addNoteForUser("Gina", "bureau kuisen", "dringend").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Gina", "facebook checken", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Gina", "boodschappen doen", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Chantal", "bureau kuisen", "dringend").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Chantal", "facebook checken", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Chantal", "dochter bellen", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Sonja", "facturen bezorgen", "dringend").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Karel", "personeel beoordelen", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Karel", "avondje uit", "prive").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Marie", "les gaan volgen", "dringend").subscribe(function (data) {
            console.log(data);
          });
          this.apiServiceApp.addNoteForUser("Tom", "vrouw bellen", "prive").subscribe(function (data) {
            console.log(data);
          });
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
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


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function HomeComponent_ng_template_12_Template(rf, ctx) {}

    function HomeComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_14_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.nieuweGebruiker();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nieuwe gebruiker");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.message, " ");
      }
    }

    function HomeComponent_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r15.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r15.description);
      }
    }

    function HomeComponent_option_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r16.description);
      }
    }

    function HomeComponent_ng_container_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function HomeComponent_ng_template_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_63_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.NotitieToevoegen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notitie toevoegen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_65_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_65_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.NotitieWijzigen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notitie wijzigen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_69_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_69_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var note_r21 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.NotitieBewerken(note_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Notitie bewerken");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_69_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var note_r21 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.NotitieVerwijderen(note_r21.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Notitie verwijderen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var note_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", note_r21.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", note_r21.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(ApiService) {
        _classCallCheck(this, HomeComponent);

        //ingelogde gebruiker
        this.activeUserNames = "Gina";
        this.loginUserName = this.activeUserNames;
        this.validUser = false;
        this.toevoegenNotitie = true;
        this.selectednotitieCategorie = "-1"; //lijst van gebruikers

        this.users = []; //lijst van categoriën

        this.categories = [];
        this.categoriesOfUser = []; //lijst van notities

        this.notesOfUser = [];
        this.notes = [];
        this.notesOfUserWithCategoryFilter = [];
        this.categoryFilter = "-1";
        this.filterAan = false;
        this.notesMetCategorieFilter = [];
        this.content = "";
        this.categorieNotitie = "-1";
        this.substring = "";
        this.notesMetSubstring = []; //moeten van invoervelden komen:

        this.addUser_userName = "Tina";
        this.addCategoriesForUser_description = "test1";
        this.deleteCategorie_idOfUser = 10;
        this.addCategorie_idOfUser = 1;
        this.contentNieuweNotitie = "nieuwe notitie van Gina met cat 6";
        this.apiService = ApiService;
      }

      _createClass(HomeComponent, [{
        key: "inloggen",
        value: function inloggen() {
          var _this3 = this;

          //gebruiker ophalen
          this.apiService.getUser(this.loginUserName).subscribe(function (data) {
            console.log(data);
            _this3.loginUser = data;

            if (_this3.loginUser.name === undefined) {
              _this3.validUser = false;
              _this3.message = "Gebruiker " + _this3.loginUserName + " is niet gekend!";
              return;
            } else {
              _this3.validUser = true;
              _this3.message = "Welkom " + _this3.loginUser.name + ", met id " + _this3.loginUser.id;
            }
          });
          this.apiService.getCategoriesOfUser(this.loginUser.id).subscribe(function (data) {
            console.log(data);
            _this3.categoriesOfUser = data;
          });
          this.apiService.getNotesOfUser(this.loginUser.id).subscribe(function (data) {
            console.log(data);
            _this3.notesOfUser = data;
            _this3.notes = data;
          });
        }
      }, {
        key: "nieuweGebruiker",
        value: function nieuweGebruiker() {
          alert("aanmelden");
        }
      }, {
        key: "filterCategory",
        value: function filterCategory(event) {
          this.categoryFilter = event.target.value;
        }
      }, {
        key: "filterCategoryToepassen",
        value: function filterCategoryToepassen() {
          var _this4 = this;

          if (this.filterAan) {
            this.notes = this.notesOfUser;
          }

          if (this.categoryFilter == "-1") {
            this.filterAan = false;
            return;
          }

          this.notes.forEach(function (note) {
            if (note.categoryId == Number(_this4.categoryFilter)) {
              _this4.notesMetCategorieFilter.push(note);
            }
          });
          this.notes = this.notesMetCategorieFilter;
          this.filterAan = true;
          this.notesMetCategorieFilter = [];
        }
      }, {
        key: "Notitiecategory",
        value: function Notitiecategory(event) {
          this.categorieNotitie = event.target.value;
        }
      }, {
        key: "NotitieToevoegen",
        value: function NotitieToevoegen() {
          var _this5 = this;

          if (this.categorieNotitie == "-1") {
            alert("U koos geen categorie");
            return;
          }

          this.apiService.getNotesOfUser(this.loginUser.id).subscribe(function (data) {
            console.log(data);

            _this5.apiService.addNoteForUser(_this5.loginUser.id, _this5.categorieNotitie, _this5.content).subscribe(function (data) {
              console.log(data);
            });

            _this5.notesOfUser = data;
          });
        }
      }, {
        key: "NotitiesMetZoekstringZoeken",
        value: function NotitiesMetZoekstringZoeken() {
          var _this6 = this;

          this.notes.forEach(function (note) {
            if (note.content.includes(_this6.substring)) {
              _this6.notesMetSubstring.push(note);
            }
          });
          this.notes = this.notesMetSubstring;
          this.substring = "";
          this.notesMetSubstring = [];
        }
      }, {
        key: "NotitieBewerken",
        value: function NotitieBewerken(note) {
          this.toevoegenNotitie = false;
          this.content = note.content;
          this.selectednotitieCategorie = note.categoryId;
        }
      }, {
        key: "NotitieWijzigen",
        value: function NotitieWijzigen() {
          alert(this.categorieNotitie);
          this.toevoegenNotitie = true;
        }
      }, {
        key: "NotitieVerwijderen",
        value: function NotitieVerwijderen(noteId) {
          var _this7 = this;

          this.apiService.getNotesOfUser(this.loginUser.id).subscribe(function (data) {
            console.log(data);

            _this7.apiService.delNoteOfUser(noteId).subscribe(function (data) {
              console.log(data);
            });

            _this7.notesOfUser = data;
          });
        } //apiservice
        //gebruikers ophalen

      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this8 = this;

          this.apiService.getUsers().subscribe(function (data) {
            console.log(data);
            _this8.users = data;
          });
        }
      }, {
        key: "getUser",
        value: function getUser(userName) {
          var _this9 = this;

          this.apiService.getUser(userName).subscribe(function (data) {
            console.log(data);
            _this9.loginUser = data; // this.loginUserId = data.id;
            // this.loginUserName = data.name;
          });
        } //gebruiker toevoegen

      }, {
        key: "addUser",
        value: function addUser() {
          this.apiService.addUser(this.addUser_userName).subscribe(function (data) {
            console.log(data);
          });
        } //gebruiker verwijderen

      }, {
        key: "delUser",
        value: function delUser() {
          this.apiService.delUser(this.loginUserId).subscribe(function (data) {
            console.log(data);
          });
        } //categoriën
        //catergoriën ophalen

      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this10 = this;

          this.apiService.getCategories().subscribe(function (data) {
            console.log(data);
            _this10.categories = data;
          });
        } //categoriën van de actieve gebruiker ophalen

      }, {
        key: "getCategoriesOfUser",
        value: function getCategoriesOfUser(userId) {
          var _this11 = this;

          this.apiService.getCategoriesOfUser(userId).subscribe(function (data) {
            console.log(data);
            _this11.categoriesOfUser = data;
          });
        } //categorie voor de actieve gebruiker toevoegen

      }, {
        key: "addCategoriesForUser",
        value: function addCategoriesForUser() {
          this.apiService.addCategoriesForUser(this.loginUserId, this.addCategoriesForUser_description).subscribe(function (data) {
            console.log(data);
          });
        } //categoriën van de actieve gebruiker verwijderen en dus ook de bijhorende notities

      }, {
        key: "deleteCategoriesOfUser",
        value: function deleteCategoriesOfUser() {
          this.apiService.delCategoriesOfUser(this.deleteCategorie_idOfUser).subscribe(function (data) {
            console.log(data);
          });
        } //notities

      }, {
        key: "getNotes",
        value: function getNotes() {
          var _this12 = this;

          this.apiService.getNotes().subscribe(function (data) {
            console.log(data);
            _this12.notes = data;
          });
        }
      }, {
        key: "getNotesOfUser",
        value: function getNotesOfUser(userId) {
          var _this13 = this;

          this.apiService.getNotesOfUser(userId).subscribe(function (data) {
            console.log(data);
            _this13.notesOfUser = data;
          });
        }
      }, {
        key: "addNoteForUser",
        value: function addNoteForUser(userId, categoryId, content) {
          this.apiService.addNoteForUser(userId, categoryId, content).subscribe(function (data) {
            console.log(data);
          });
        } //opgekuisd

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.getUser();
          // this.getCategories();
          // this.getNotes();
          // //Catergorie
          // this.formCategory = this.formBuilder.group({
          //   description: this.formBuilder.array([])
          // });
          // //Notities
          // this.formNote = this.formBuilder.group({
          //   content: this.formBuilder.array([])
          // });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 70,
      vars: 14,
      consts: [["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["activeUserContent", ""], ["newUserContent", ""], [3, "change"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "change"], ["buttonToevoegen", ""], ["buttonWijzigen", ""], ["colspan", "3"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", 3, "name", "disabled", "value"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welkom, gelieve uw gebruikersnaam op te geven");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.loginUserName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() {
            return ctx.inloggen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Notities weergeven");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_ng_container_11_Template, 1, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_ng_template_12_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_template_14_Template, 4, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "filteren op categorie:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_select_change_26_listener($event) {
            return ctx.filterCategory($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "--- Kies een categorie ---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_option_29_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_32_listener() {
            return ctx.filterCategoryToepassen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Filter toepassen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Zoeken op content:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.substring = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_43_listener() {
            return ctx.NotitiesMetZoekstringZoeken();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Notities zoeken");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Notitie toevoegen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_53_listener($event) {
            return ctx.selectednotitieCategorie = $event;
          })("change", function HomeComponent_Template_select_change_53_listener($event) {
            return ctx.Notitiecategory($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "--- Kies een categorie ---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HomeComponent_option_56_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HomeComponent_ng_container_62_Template, 1, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, HomeComponent_ng_template_63_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HomeComponent_ng_template_65_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_div_69_Template, 6, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validUser)("ngIfThen", _r1)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesOfUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.substring);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectednotitieCategorie);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesOfUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toevoegenNotitie)("ngIfThen", _r8)("ngIfElse", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]],
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
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
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