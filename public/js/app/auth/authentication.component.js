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
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n    <header class=\"row spacing\">\n        <nav class=\"col-md-8 col-md-offset-2\">\n            <ul class=\"nav nav-tabs\">\n                <li><a [routerLink]=\"['./signup']\">Signup</a></li>\n                <li><a [routerLink]=\"['./signin']\">Signin</a></li>\n                <li><a [routerLink]=\"['./logout']\">Logout</a></li>\n            </ul>\n        </nav>\n    </header>\n    <div class=\"row spacing\">\n        <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n    .router-link-active {\n      color: #555;\n      cursor: default;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n    }\n  "]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFDMUQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFpQ25EO0lBQUE7SUFFQSxDQUFDO0lBbENEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSwrZEFhVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLE1BQU0sRUFBRSxDQUFDLDJMQVFSLENBQUM7U0FDSCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ04sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7U0FDaEQsQ0FBQzs7K0JBQUE7SUFHRiw4QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksK0JBQXVCLDBCQUVuQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tIFwiLi9sb2dvdXQuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hdXRoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9zaWdudXAnXVwiPlNpZ251cDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vc2lnbmluJ11cIj5TaWduaW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2xvZ291dCddXCI+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICBzdHlsZXM6IFtgXG4gICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICBgXVxufSlcbkBSb3V0ZXMoW1xuICB7IHBhdGg6ICcvc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL3NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcbiAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
