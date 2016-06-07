var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ["angular2/core", "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter();
                    this.color = "white";
                    this.show = true;
                }
                MessageComponent.prototype.onClick = function () {
                    this.editClicked.emit('Changed');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n    <input type=\"text\" [(ngModel)] = \"message.content\" />\n    <article class=\"panel panel-default\" [ngStyle]=\"{'background-color': color}\" *ngIf=\"show\">\n      <div class=\"panel-body\">\n        {{ message.content }}\n      </div>\n      <footer class=\"panel-footer\">\n        <div class=\"author\">\n          {{ message.username }}\n        </div>\n        <div class=\"config\">\n          <a href=\"#\" (click)=\"onClick()\">Edit</a>\n          <a href=\"#\">Delete</a>\n        </div>\n      </footer>\n    </article>\n  ",
                        styles: ["  \n     .author {\n       display: inline-block;\n       font-style: italic;\n       font-size: 12px;\n       width: 80%;\n     }\n     .config {\n       display: inline-block;\n       text-align: right;\n       font-size: 12px;\n       width: 19%;\n     }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.messages = [
                        new message_2.Message('Hello world', null, 'Max'),
                        new message_2.Message('New message', null, 'Goye')
                    ];
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: " \n      <div class=\"row\">\n        <section class=\"col-md-8 col-md-offset-2\">\n          <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\">\n          </my-message>\n        </section>\n      </div> \n      <div class=\"row\">\n      </div>\n    ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                }
                return User;
            }());
            exports_5("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNRSxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQUNILGNBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDZCQVlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3lCRDtnQkFBQTtvQkFFWSxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO29CQUNuRCxVQUFLLEdBQUcsT0FBTyxDQUFDO29CQUNoQixTQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUlkLENBQUM7Z0JBSEMsa0NBQU8sR0FBUDtvQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFORDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBckNYO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxnaUJBZ0JUO3dCQUNELE1BQU0sRUFBRSxDQUFDLHVRQWFSLENBQUM7cUJBQ0gsQ0FBQzs7b0NBQUE7Z0JBVUYsdUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELCtDQVFDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQzVCRDtnQkFBQTtvQkFDRSxhQUFRLEdBQWM7d0JBQ3BCLElBQUksaUJBQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzt3QkFDdkMsSUFBSSxpQkFBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO3FCQUN6QyxDQUFDO2dCQUNKLENBQUM7Z0JBbkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwyVEFTVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDakMsQ0FBQzs7Z0NBQUE7Z0JBTUYsbUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVDQUtDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDbEJELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDOzs7Ozs7Ozs7OztZQ0p4QjtnQkFDRSxjQUFtQixLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFrQixFQUFFLFFBQWlCO29CQUF0RSxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUVoQyxDQUFDO2dCQUNILFdBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVCQUlDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vQW5ndWxhci0yLXBsdXMtTWVhbi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZD86IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZyl7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLm1lc3NhZ2VJZCA9IG1lc3NhZ2VJZDtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXSA9IFwibWVzc2FnZS5jb250ZW50XCIgLz5cbiAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvcn1cIiAqbmdJZj1cInNob3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICB7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2FydGljbGU+XG4gIGAsXG4gIHN0eWxlczogW2AgIFxuICAgICAuYXV0aG9yIHtcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICB3aWR0aDogODAlO1xuICAgICB9XG4gICAgIC5jb25maWcge1xuICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgd2lkdGg6IDE5JTtcbiAgICAgfVxuICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgY29sb3IgPSBcIndoaXRlXCI7XG4gIHNob3cgPSB0cnVlO1xuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCcpO1xuICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgPG15LW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPlxuICAgICAgICAgIDwvbXktbWVzc2FnZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+IFxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtcbiAgICBuZXcgTWVzc2FnZSgnSGVsbG8gd29ybGQnLCBudWxsLCAnTWF4JyksXG4gICAgbmV3IE1lc3NhZ2UoJ05ldyBtZXNzYWdlJywgbnVsbCwgJ0dveWUnKVxuICBdO1xufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGZpcnN0TmFtZT86IHN0cmluZywgbGFzdE5hbWU/OiBzdHJpbmcpe1xuICAgIFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
