"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n    <header class=\"row\">\n      <nav class=\"col-md-8 col-md-offset-2\">\n        <ul class=\"nav nav-pills\">\n          <li><a [routerLink]=\"['']\">Messenger</a></li>\n          <li><a [routerLink]=\"['auth']\">Authentication</a></li>\n        </ul>\n      </nav>\n    </header>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n    header {\n      margin-bottom: 20px;\n    }\n    ul {\n      text-align: center;\n    }\n    li {\n      float: none;\n      display: inline-block;\n    }\n    .router-link-active {\n      background-color: #337ab7;\n      color: white;\n    }\n  "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQWdDbEQ7SUFBQTtJQUE4QixDQUFDO0lBL0IvQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsbVNBU1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixNQUFNLEVBQUUsQ0FBQywrUEFlUjthQUNBO1NBQ0YsQ0FBQzs7dUJBQUE7SUFDNEIsc0JBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLHVCQUFlLGtCQUFHLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cInJvd1wiPlxuICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzXCI+XG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnJ11cIj5NZXNzZW5nZXI8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydhdXRoJ11cIj5BdXRoZW50aWNhdGlvbjwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gIHN0eWxlczogW2BcbiAgICBoZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgdWwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
