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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var messages_component_1 = require('./messages/messages.component');
var authentication_component_1 = require('./auth/authentication.component');
var header_component_1 = require('./header.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n      <div class=\"container\">\n        <my-header></my-header>\n        <router-outlet></router-outlet>\n      </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
        }),
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxtQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQUNoRSx5Q0FBc0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN4RSxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQWVuRDtJQUFBO0lBQ0EsQ0FBQztJQWZEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxrSUFLVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7U0FDbkQsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNOLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBRTtTQUN0RCxDQUFDOztvQkFBQTtJQUVGLG1CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxvQkFBWSxlQUN4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50XVxufSlcbkBSb3V0ZXMoW1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICcvYXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
