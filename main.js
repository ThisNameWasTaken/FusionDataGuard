(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bottom-sheet/bottom-sheet.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bottom-sheet/bottom-sheet.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"query-builder-container mt-2\">\r\n  <query-builder\r\n    [(ngModel)]=\"query\"\r\n    [config]=\"currentConfig\"\r\n    [allowRuleset]=\"allowRuleset\"\r\n    [allowCollapse]=\"allowCollapse\"\r\n  >\r\n    <ng-container\r\n      *queryButtonGroup=\"\r\n        let ruleset;\r\n        let addRule = addRule;\r\n        let addRuleSet = addRuleSet;\r\n        let removeRuleSet = removeRuleSet\r\n      \"\r\n    >\r\n      <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addRule()\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        mat-icon-button\r\n        color=\"primary\"\r\n        *ngIf=\"addRuleSet\"\r\n        (click)=\"addRuleSet()\"\r\n      >\r\n        <mat-icon>add_circle_outline</mat-icon>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        mat-icon-button\r\n        color=\"accent\"\r\n        *ngIf=\"removeRuleSet\"\r\n        (click)=\"removeRuleSet()\"\r\n      >\r\n        <mat-icon>remove_circle_outline</mat-icon>\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *queryArrowIcon>\r\n      <mat-icon ngClass=\"mat-arrow-icon\">chevron_right</mat-icon>\r\n    </ng-container>\r\n    <ng-container *queryRemoveButton=\"let rule; let removeRule = removeRule\">\r\n      <button\r\n        type=\"button\"\r\n        mat-icon-button\r\n        color=\"accent\"\r\n        (click)=\"removeRule(rule)\"\r\n        class=\"query-remove-button\"\r\n      >\r\n        <mat-icon>remove</mat-icon>\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *querySwitchGroup=\"let ruleset; let onChange = onChange\">\r\n      <mat-radio-group\r\n        *ngIf=\"ruleset\"\r\n        [(ngModel)]=\"ruleset.condition\"\r\n        (ngModelChange)=\"onChange($event)\"\r\n      >\r\n        <mat-radio-button class=\"pl-3 pr-2 pt-2\" value=\"and\">\r\n          And\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"pl-2 pr-3 pt-2\" value=\"or\"\r\n          >Or</mat-radio-button\r\n        >\r\n      </mat-radio-group>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryEntity=\"let rule; let entities = entities; let onChange = onChange\"\r\n    >\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-select\r\n          [(ngModel)]=\"rule.entity\"\r\n          (ngModelChange)=\"onChange($event, rule)\"\r\n        >\r\n          <mat-option *ngFor=\"let entity of entities\" [value]=\"entity.value\">\r\n            {{ entity.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryField=\"\r\n        let rule;\r\n        let fields = fields;\r\n        let onChange = onChange;\r\n        let getFields = getFields\r\n      \"\r\n    >\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-select\r\n          [(ngModel)]=\"rule.field\"\r\n          (ngModelChange)=\"onChange($event, rule)\"\r\n        >\r\n          <mat-option\r\n            *ngFor=\"let field of getFields(rule.entity)\"\r\n            [value]=\"field.value\"\r\n          >\r\n            {{ field.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryOperator=\"\r\n        let rule;\r\n        let operators = operators;\r\n        let onChange = onChange\r\n      \"\r\n    >\r\n      <mat-form-field appearance=\"outline\" class=\"narrow\" [style.width.px]=\"90\">\r\n        <mat-select\r\n          [(ngModel)]=\"rule.operator\"\r\n          (ngModelChange)=\"onChange(rule)\"\r\n        >\r\n          <mat-option *ngFor=\"let value of operators\" [value]=\"value\">\r\n            {{ value }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryInput=\"let rule; type: 'boolean'; let onChange = onChange\"\r\n    >\r\n      <mat-checkbox\r\n        [(ngModel)]=\"rule.value\"\r\n        (ngModelChange)=\"onChange()\"\r\n      ></mat-checkbox>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryInput=\"\r\n        let rule;\r\n        let field = field;\r\n        let options = options;\r\n        type: 'category';\r\n        let onChange = onChange\r\n      \"\r\n    >\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-select [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\r\n          <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\">\r\n            {{ opt.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container *queryInput=\"let rule; type: 'date'; let onChange = onChange\">\r\n      <mat-form-field appearance=\"outline\">\r\n        <input\r\n          matInput\r\n          [matDatepicker]=\"picker\"\r\n          [(ngModel)]=\"rule.value\"\r\n          (ngModelChange)=\"onChange()\"\r\n        />\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryInput=\"\r\n        let rule;\r\n        let options = options;\r\n        type: 'multiselect';\r\n        let onChange = onChange\r\n      \"\r\n    >\r\n      <mat-form-field\r\n        appearance=\"outline\"\r\n        class=\"narrow\"\r\n        [style.width.px]=\"300\"\r\n      >\r\n        <mat-select\r\n          [(ngModel)]=\"rule.value\"\r\n          multiple\r\n          (ngModelChange)=\"onChange()\"\r\n        >\r\n          <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\">\r\n            {{ opt.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryInput=\"\r\n        let rule;\r\n        let field = field;\r\n        type: 'number';\r\n        let onChange = onChange\r\n      \"\r\n    >\r\n      <mat-form-field appearance=\"outline\" [style.width.px]=\"50\">\r\n        <input\r\n          matInput\r\n          [(ngModel)]=\"rule.value\"\r\n          type=\"number\"\r\n          (ngModelChange)=\"onChange()\"\r\n        />\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryInput=\"\r\n        let rule;\r\n        let field = field;\r\n        type: 'string';\r\n        let onChange = onChange\r\n      \"\r\n    >\r\n      <mat-form-field appearance=\"outline\">\r\n        <input matInput [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\" />\r\n      </mat-form-field>\r\n    </ng-container>\r\n    <ng-container\r\n      *queryInput=\"\r\n        let rule;\r\n        let field = field;\r\n        type: 'textarea';\r\n        let onChange = onChange\r\n      \"\r\n    >\r\n      <mat-form-field appearance=\"outline\">\r\n        <input matInput [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\" />\r\n      </mat-form-field>\r\n    </ng-container>\r\n  </query-builder>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"pull-left\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://www.creative-tim.com\">\r\n            Creative Tim\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://creative-tim.com/about-us\">\r\n            About Us\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"http://blog.creative-tim.com\">\r\n            Blog\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.creative-tim.com/license\">\r\n            Licenses\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <div class=\"copyright pull-right\">\r\n      &copy;\r\n      {{ test | date: 'yyyy' }}, made with\r\n      <i class=\"material-icons\">favorite</i> by\r\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>\r\n      for a better web.\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\r\n  #navbar\r\n  class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\"\r\n>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-minimize\">\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"minimizeSidebar()\"\r\n          class=\"btn btn-just-icon btn-white btn-fab btn-round\"\r\n        >\r\n          <i\r\n            class=\"material-icons text_align-center visible-on-sidebar-regular\"\r\n          >\r\n            more_vert\r\n          </i>\r\n          <i\r\n            class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\"\r\n          >\r\n            view_list\r\n          </i>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"{{ getPath() }}\"> {{ getTitle() }}</a>\r\n    </div>\r\n    <button\r\n      mat-button\r\n      class=\"navbar-toggler btn-no-ripple\"\r\n      type=\"button\"\r\n      (click)=\"sidebarToggle()\"\r\n    >\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n      <form class=\"navbar-form\">\r\n        <div class=\"input-group no-border\">\r\n          <input\r\n            type=\"text\"\r\n            value=\"\"\r\n            class=\"form-control\"\r\n            placeholder=\"Search...\"\r\n          />\r\n          <button\r\n            mat-raised-button\r\n            type=\"submit\"\r\n            class=\"btn btn-white btn-round btn-just-icon\"\r\n          >\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </form>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#pablo\">\r\n            <i class=\"material-icons\">dashboard</i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"#pablo\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            <i class=\"material-icons\">notifications</i>\r\n            <span class=\"notification\">5</span>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div\r\n            class=\"dropdown-menu dropdown-menu-right\"\r\n            aria-labelledby=\"navbarDropdownMenuLink\"\r\n          >\r\n            <a class=\"dropdown-item\" href=\"#\"\r\n              >Mike John responded to your email</a\r\n            >\r\n            <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n            <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#pablo\">\r\n            <i class=\"material-icons\">person</i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n  <a class=\"simple-text logo-mini\">\r\n    <div class=\"logo-img\">\r\n      <img src=\"/assets/img/angular2-logo-white.png\" />\r\n    </div>\r\n  </a>\r\n  <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\r\n    Creative Tim\r\n  </a>\r\n</div>\r\n\r\n<div class=\"sidebar-wrapper\">\r\n  <div class=\"user\">\r\n    <div class=\"photo\">\r\n      <img src=\"./assets/img/faces/avatar.jpg\" />\r\n    </div>\r\n    <div class=\"user-info\">\r\n      <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n        <span>\r\n          Tania Andrew\r\n          <b class=\"caret\"></b>\r\n        </span>\r\n      </a>\r\n      <div class=\"collapse\" id=\"collapseExample\">\r\n        <ul class=\"nav\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\">\r\n              <span class=\"sidebar-mini\">MP</span>\r\n              <span class=\"sidebar-normal\">My Profile</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\">\r\n              <span class=\"sidebar-mini\">EP</span>\r\n              <span class=\"sidebar-normal\">Edit Profile</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\">\r\n              <span class=\"sidebar-mini\">S</span>\r\n              <span class=\"sidebar-normal\">Settings</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"isMobileMenu()\">\r\n    <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\"\r\n        ><div class=\"input-group no-border\">\r\n          <input\r\n            type=\"text\"\r\n            value=\"\"\r\n            class=\"form-control\"\r\n            placeholder=\"Search...\"\r\n          />\r\n          <button\r\n            mat-raised-button\r\n            type=\"submit\"\r\n            class=\"btn btn-white btn-round btn-just-icon\"\r\n          >\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button></div\r\n      ></span>\r\n    </form>\r\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#pablo\">\r\n          <i class=\"material-icons\">dashboard</i>\r\n          <p>\r\n            <span class=\"d-lg-none d-md-block\">Stats</span>\r\n          </p>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link\"\r\n          href=\"#pablo\"\r\n          id=\"navbarDropdownMenuLink\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n        >\r\n          <i class=\"material-icons\">notifications</i>\r\n          <span class=\"notification\">5</span>\r\n          <p>\r\n            <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n          </p>\r\n        </a>\r\n        <div\r\n          class=\"dropdown-menu dropdown-menu-right\"\r\n          aria-labelledby=\"navbarDropdownMenuLink\"\r\n        >\r\n          <a class=\"dropdown-item\" href=\"#\"\r\n            >Mike John responded to your email</a\r\n          >\r\n          <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n          <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#pablo\">\r\n          <i class=\"material-icons\">person</i>\r\n          <p>\r\n            <span class=\"d-lg-none d-md-block\">Account</span>\r\n          </p>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <ul class=\"nav\">\r\n    <li\r\n      routerLinkActive=\"active\"\r\n      *ngFor=\"let menuitem of menuItems\"\r\n      class=\"nav-item\"\r\n    >\r\n      <!--If is a single link-->\r\n      <a\r\n        [routerLink]=\"[menuitem.path]\"\r\n        *ngIf=\"menuitem.type === 'link'\"\r\n        class=\"nav-link\"\r\n      >\r\n        <i class=\"material-icons\">{{ menuitem.icontype }}</i>\r\n        <p>{{ menuitem.title }}</p>\r\n      </a>\r\n      <!--If it have a submenu-->\r\n      <a\r\n        data-toggle=\"collapse\"\r\n        href=\"#{{ menuitem.collapse }}\"\r\n        *ngIf=\"menuitem.type === 'sub'\"\r\n        (click)=\"updatePS()\"\r\n        class=\"nav-link\"\r\n      >\r\n        <i class=\"material-icons\">{{ menuitem.icontype }}</i>\r\n        <p>{{ menuitem.title }}<b class=\"caret\"></b></p>\r\n      </a>\r\n\r\n      <!--Display the submenu items-->\r\n      <div\r\n        id=\"{{ menuitem.collapse }}\"\r\n        class=\"collapse\"\r\n        *ngIf=\"menuitem.type === 'sub'\"\r\n      >\r\n        <ul class=\"nav\">\r\n          <li\r\n            routerLinkActive=\"active\"\r\n            *ngFor=\"let childitem of menuitem.children\"\r\n            class=\"nav-item\"\r\n          >\r\n            <a [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\r\n              <span class=\"sidebar-mini\">{{ childitem.ab }}</span>\r\n              <span class=\"sidebar-normal\">{{ childitem.title }}</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a\r\n        href=\"http://md-pro-angular.creative-tim.com/documentation/tutorial?ref=md-pro-archive\"\r\n        class=\"nav-link\"\r\n      >\r\n        <i class=\"material-icons\">school</i>\r\n        <p>Documentation</p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/auth/auth-layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\r\n  class=\"navbar mt-2 navbar-expand-lg bg-primary navbar-transparent navbar-absolute\"\r\n  color-on-scroll=\"500\"\r\n  *ngIf=\"isLoggedIn\"\r\n>\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <a\r\n        class=\"navbar-brand d-none d-sm-block\"\r\n        routerLink=\"/\"\r\n        style=\"transform: translateY(-7px)\"\r\n      >\r\n        <img\r\n          src=\"assets/img/FusionDataGuardLogo-on-dark.svg\"\r\n          width=\"64px\"\r\n          height=\"auto\"\r\n          class=\"mr-2\"\r\n        />\r\n        <strong>Fusion Data Guard</strong>\r\n      </a>\r\n    </div>\r\n    <button\r\n      mat-button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      (click)=\"sidebarToggle()\"\r\n    >\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\">\r\n      <ul class=\"navbar-nav\">\r\n        <ng-container *ngIf=\"!isLoggedIn\">\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link m-0\" routerLink=\"/register\">\r\n              <mat-icon>person_add</mat-icon>\r\n              <span>Register</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link m-0\" routerLink=\"/login\">\r\n              <mat-icon>how_to_reg</mat-icon>\r\n              <span>Login</span>\r\n            </a>\r\n          </li>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"isLoggedIn\">\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a\r\n              class=\"nav-link m-0\"\r\n              role=\"button\"\r\n              style=\"cursor: pointer; -webkit-tap-highlight-color: transparent; user-select: none;\"\r\n              aria-label=\"enable voice over\"\r\n              [attr.aria-pressed]=\"isVoiceOverOn\"\r\n              (click)=\"toggleVoiceOver()\"\r\n            >\r\n              <mat-icon class=\"mat-icon--on mr-1\">\r\n                record_voice_over\r\n              </mat-icon>\r\n              <mat-icon class=\"mat-icon--off mr-1\">\r\n                voice_over_off\r\n              </mat-icon>\r\n              <span>Voice Over</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link m-0\" routerLink=\"/logout\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              <span>Log Out</span>\r\n            </a>\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router = this.router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
                return;
            var body = document.getElementsByTagName('body')[0];
            var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
            if (body.classList.contains('modal-open')) {
                body.classList.remove('modal-open');
                modalBackdrop.remove();
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.module */ "./src/app/components/sidebar/sidebar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.module */ "./src/app/components/navbar/navbar.module.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bottom-sheet/bottom-sheet.component */ "./src/app/components/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var angular2_query_builder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-query-builder */ "./node_modules/angular2-query-builder/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                angular2_query_builder__WEBPACK_IMPORTED_MODULE_14__["QueryBuilderModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"]),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                MaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"], _components_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_13__["BottomSheetComponent"]],
            entryComponents: [_components_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_13__["BottomSheetComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");

var AppRoutes = [
    {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule',
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/components/bottom-sheet/bottom-sheet.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/bottom-sheet/bottom-sheet.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query-builder-container {\n  height: calc(100vh - 64px);\n}\n\n.query-remove-button {\n  z-index: 1;\n}\n\n.narrow {\n  -webkit-box-flex: unset !important;\n          flex-grow: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3R0b20tc2hlZXQvQzpcXERldlxcRnVzaW9uRGF0YUd1YXJkL3NyY1xcYXBwXFxjb21wb25lbnRzXFxib3R0b20tc2hlZXRcXGJvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO1VBQUEsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVyeS1idWlsZGVyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XHJcbn1cclxuXHJcbi5xdWVyeS1yZW1vdmUtYnV0dG9uIHtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubmFycm93IHtcclxuICBmbGV4LWdyb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnF1ZXJ5LWJ1aWxkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG5cbi5xdWVyeS1yZW1vdmUtYnV0dG9uIHtcbiAgei1pbmRleDogMTtcbn1cblxuLm5hcnJvdyB7XG4gIGZsZXgtZ3JvdzogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/bottom-sheet/bottom-sheet.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/bottom-sheet/bottom-sheet.component.ts ***!
  \*******************************************************************/
/*! exports provided: BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(formBuilder, _bottomSheetRef) {
        this.formBuilder = formBuilder;
        this._bottomSheetRef = _bottomSheetRef;
        this.lrm = {
            condition: 'AND',
            rules: [
                {
                    condition: 'AND',
                    rules: [
                        {
                            id: 'realized',
                            field: 'realized',
                            type: 'double',
                            input: 'number',
                            operator: 'between',
                            value: [20000, 30000],
                        },
                        {
                            id: 'Actual',
                            field: 'Actual vs Realized',
                            type: 'integer',
                            input: 'number',
                            operator: 'less',
                            value: 1000,
                        },
                    ],
                },
            ],
            valid: true,
        };
        this.query = window['query'] || {
            condition: 'or',
            rules: [
                {
                    condition: 'and',
                    rules: [
                        { field: 'currencyPair', operator: '=', value: 'EUR/USD' },
                        { field: 'price', operator: '>', value: 1.1 },
                    ],
                },
                {
                    condition: 'and',
                    rules: [
                        { field: 'currencyPair', operator: '=', value: 'EUR/GBP' },
                        { field: 'price', operator: '<', value: 1.2 },
                    ],
                },
            ],
        };
        this.entityConfig = {
            entities: {
                physical: { name: 'Physical Attributes' },
                nonphysical: { name: 'Nonphysical Attributes' },
            },
            fields: {
                realized: { name: 'Realized', type: 'number', entity: 'physical' },
                currencyPair: {
                    name: 'currency pair',
                    entity: 'physical',
                    type: 'category',
                    options: [
                        { name: 'EUR/USD', value: 'EUR/USD' },
                        { name: 'EUR/GBP', value: 'EUR/GBP' },
                    ],
                },
                last: {
                    name: 'Last',
                    type: 'string',
                    nullable: true,
                    entity: 'nonphysical',
                },
                swift: {
                    name: 'Swift',
                    type: 'string',
                    nullable: true,
                    entity: 'nonphysical',
                },
                threshold: {
                    name: 'Threshold',
                    type: 'number',
                    entity: 'physical',
                },
                isin: {
                    name: 'ISIN',
                    type: 'string',
                    entity: 'physical',
                },
                price: {
                    name: 'Price',
                    type: 'number',
                    entity: 'physical',
                },
            },
        };
        this.config = {
            fields: {
                realized: { name: 'Realized', type: 'number' },
                currencyPair: {
                    name: 'Currency',
                    type: 'category',
                    options: [
                        { name: 'EUR/USD', value: 'EUR/USD' },
                        { name: 'EUR/GBP', value: 'EUR/GBP' },
                    ],
                },
                last: {
                    name: 'Last',
                    type: 'string',
                    nullable: true,
                },
                swift: {
                    name: 'Swift',
                    type: 'string',
                    nullable: true,
                },
                threshold: {
                    name: 'Threshold',
                    type: 'number',
                },
                isin: {
                    name: 'ISIN',
                    type: 'string',
                },
                price: {
                    name: 'Price',
                    type: 'number',
                },
            },
        };
        this.allowRuleset = true;
        this.allowCollapse = true;
        this.persistValueOnFieldChange = false;
        this.queryCtrl = this.formBuilder.control(this.query);
        this.currentConfig = this.config;
    }
    BottomSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: Unsubscribe
        this._bottomSheetRef.afterDismissed().subscribe(function () {
            // @ts-ignore
            window.query = _this.query;
        });
    };
    BottomSheetComponent.prototype.switchModes = function (event) {
        this.currentConfig = event.target.checked
            ? this.entityConfig
            : this.config;
    };
    BottomSheetComponent.prototype.changeDisabled = function (event) {
        event.target.checked
            ? this.queryCtrl.disable()
            : this.queryCtrl.enable();
    };
    BottomSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet',
            template: __webpack_require__(/*! raw-loader!./bottom-sheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bottom-sheet/bottom-sheet.component.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.component.scss */ "./src/app/components/bottom-sheet/bottom-sheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"]])
    ], BottomSheetComponent);
    return BottomSheetComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-cmp',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.hideSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('sidebar')[0];
        if (misc.hide_sidebar_active === true) {
            setTimeout(function () {
                body.classList.remove('hide-sidebar');
                misc.hide_sidebar_active = false;
            }, 300);
            setTimeout(function () {
                sidebar.classList.remove('animation');
            }, 600);
            sidebar.classList.add('animation');
        }
        else {
            setTimeout(function () {
                body.classList.add('hide-sidebar');
                misc.hide_sidebar_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
                return;
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        return window.innerWidth > 991;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document
                .getElementsByClassName('wrapper-full-page')[0]
                .appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            //asign a function
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);
        this.mobile_menu_visible = 0;
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === 'link' &&
                this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === 'sub') {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    // console.log(subtitle)
                    // console.log(titlee)
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('app-navbar-cmp', { static: false }),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/navbar/navbar.module.ts ***!
  \****************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Menu Items
var ROUTES = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard',
    },
    {
        path: '/components',
        title: 'Components',
        type: 'sub',
        icontype: 'apps',
        collapse: 'components',
        children: [
            { path: 'buttons', title: 'Buttons', ab: 'B' },
            { path: 'grid', title: 'Grid System', ab: 'GS' },
            { path: 'panels', title: 'Panels', ab: 'P' },
            { path: 'sweet-alert', title: 'Sweet Alert', ab: 'SA' },
            { path: 'notifications', title: 'Notifications', ab: 'N' },
            { path: 'icons', title: 'Icons', ab: 'I' },
            { path: 'typography', title: 'Typography', ab: 'T' },
        ],
    },
    {
        path: '/forms',
        title: 'Forms',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'forms',
        children: [
            { path: 'regular', title: 'Regular Forms', ab: 'RF' },
            { path: 'extended', title: 'Extended Forms', ab: 'EF' },
            { path: 'validation', title: 'Validation Forms', ab: 'VF' },
            { path: 'wizard', title: 'Wizard', ab: 'W' },
        ],
    },
    {
        path: '/tables',
        title: 'Tables',
        type: 'sub',
        icontype: 'grid_on',
        collapse: 'tables',
        children: [
            { path: 'regular', title: 'Regular Tables', ab: 'RT' },
            { path: 'extended', title: 'Extended Tables', ab: 'ET' },
            { path: 'datatables.net', title: 'Datatables.net', ab: 'DT' },
        ],
    },
    {
        path: '/maps',
        title: 'Maps',
        type: 'sub',
        icontype: 'place',
        collapse: 'maps',
        children: [
            { path: 'google', title: 'Google Maps', ab: 'GM' },
            { path: 'fullscreen', title: 'Full Screen Map', ab: 'FSM' },
            { path: 'vector', title: 'Vector Map', ab: 'VM' },
        ],
    },
    {
        path: '/widgets',
        title: 'Widgets',
        type: 'link',
        icontype: 'widgets',
    },
    {
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'timeline',
    },
    {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'date_range',
    },
    {
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        icontype: 'image',
        collapse: 'pages',
        children: [
            { path: 'pricing', title: 'Pricing', ab: 'P' },
            { path: 'timeline', title: 'Timeline Page', ab: 'TP' },
            { path: 'login', title: 'Login Page', ab: 'LP' },
            { path: 'register', title: 'Register Page', ab: 'RP' },
            { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' },
            { path: 'user', title: 'User Page', ab: 'UP' },
        ],
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        return window.innerWidth > 991;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = (document.querySelector('.sidebar .sidebar-wrapper'));
            this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](elemSidebar);
        }
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            this.ps.update();
        }
    };
    SidebarComponent.prototype.isMac = function () {
        return (navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
            navigator.platform.toUpperCase().indexOf('IPAD') >= 0);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.module.ts ***!
  \******************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/speech.service */ "./src/app/services/speech.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, element, speechService) {
        this.router = router;
        this.element = element;
        this.speechService = speechService;
        this.mobile_menu_visible = 0;
        this.isLoggedIn = true;
        this.isVoiceOverOn = false;
        this.sidebarVisible = false;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = document.getElementsByClassName('navbar-toggler')[0];
        this._router = this.router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
                return;
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    AuthLayoutComponent.prototype.toggleVoiceOver = function () {
        var _this = this;
        this.isVoiceOverOn = !this.isVoiceOverOn;
        this.speechService.read("voice assist " + (this.isVoiceOverOn ? 'on' : 'off'), function () {
            return _this.isVoiceOverOn &&
                setTimeout(function () {
                    return _this.isVoiceOverOn &&
                        _this.speechService.read('You have 2 Market data alerts 2 Static data alerts 1 barrier monitoring alert and 1 position monitoring alert. Would you like me to read them?');
                }, 2000);
        });
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton || document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.wrapper-full-page')) {
            document
                .getElementsByClassName('wrapper-full-page')[0]
                .appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document
                .getElementsByClassName('wrapper-full-page')[0]
                .appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            //asign a function
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);
        this.mobile_menu_visible = 0;
    };
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/auth/auth-layout.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_2__["SpeechService"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/speech.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/speech.service.ts ***!
  \********************************************/
/*! exports provided: SpeechService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechService", function() { return SpeechService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeechService = /** @class */ (function () {
    function SpeechService() {
        var _this = this;
        var SpeechRecognition = 
        // @ts-ignore
        window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        document.body.addEventListener('click', function () {
            var isVoiceOverOn = document
                .querySelector('[aria-label="enable voice over"]')
                .getAttribute('aria-pressed') === 'true';
            if (!isVoiceOverOn)
                return;
            _this.recognition.start();
        });
        this.recognition.onresult = function (event) {
            var message = event.results[0][0].transcript;
            if (message.toLowerCase().includes('market')) {
                _this.read('USD/CNY Spike Detected on 12th of December 2019. EUR/GBP Missing Price 2019-12-05.');
            }
            else if (message.toLowerCase().includes('static')) {
                _this.read('CUST1 Swift code missing; LEI missing. Instrument1 ISIN malformed: US00040262.');
            }
            else if (message.toLowerCase().includes('barrier')) {
                _this.read('EUR/USD Barrier Breached.');
            }
            else if (message.toLowerCase().includes('position')) {
                _this.read('Position P&L exceeds tolerance 10%.');
            }
        };
    }
    SpeechService.prototype.readNotifications = function () { };
    SpeechService.prototype.read = function (message, onSpeechEnd) {
        if (onSpeechEnd === void 0) { onSpeechEnd = function () { }; }
        var speech = new SpeechSynthesisUtterance();
        // Set the text and voice attributes.
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1.1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        speech.addEventListener('end', onSpeechEnd);
    };
    SpeechService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], SpeechService);
    return SpeechService;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

 =========================================================
 * Material Dashboard PRO Angular - v2.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-pro-angular2
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\FusionDataGuard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map