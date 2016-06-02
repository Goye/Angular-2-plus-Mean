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
                        template: "\n    <article class=\"panel panel-default\" [ngStyle]=\"{'background-color': color}\" *ngIf=\"show\">\n      <div class=\"panel-body\">\n        {{ message.content }}\n      </div>\n      <footer class=\"panel-footer\">\n        <div class=\"author\">\n          {{ message.username }}\n        </div>\n        <div class=\"config\">\n          <a href=\"#\" (click)=\"onClick()\">Edit</a>\n          <a href=\"#\">Delete</a>\n        </div>\n      </footer>\n    </article>\n  ",
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
                    this.message = new message_2.Message('Hello world', null, 'Max');
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: " \n      <div class=\"row\">\n        <section class=\"col-md-8 col-md-offset-2\">\n          <input type=\"text\" [(ngModel)] = \"message.content\" />\n        </section>\n      </div> \n      <div class=\"row\">\n      </div>\n    ",
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
System.register("messages/message-list.component", ["angular2/core"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_3;
    var MessageListComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent() {
                }
                MessageListComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-list',
                        template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n      <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n    </section>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_6("MessageListComponent", MessageListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIiwibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBQUE7Z0JBTUUsaUJBQWEsT0FBZSxFQUFFLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxNQUFlO29CQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDdkIsQ0FBQztnQkFDSCxjQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCw2QkFZQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN3QkQ7Z0JBQUE7b0JBRVksZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztvQkFDbkQsVUFBSyxHQUFHLE9BQU8sQ0FBQztvQkFDaEIsU0FBSSxHQUFHLElBQUksQ0FBQztnQkFJZCxDQUFDO2dCQUhDLGtDQUFPLEdBQVA7b0JBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBTkQ7b0JBQUMsWUFBSyxFQUFFOztpRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O3FFQUFBO2dCQXBDWDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsaWVBZVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsdVFBYVIsQ0FBQztxQkFDSCxDQUFDOztvQ0FBQTtnQkFVRix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDNUJEO2dCQUFBO29CQUNFLFlBQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMk9BUVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQ2pDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQ2RELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDOzs7Ozs7Ozs7OztZQ0p4QjtnQkFDRSxjQUFtQixLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFrQixFQUFFLFFBQWlCO29CQUF0RSxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUVoQyxDQUFDO2dCQUNILFdBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVCQUlDLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQ09EO2dCQUFBO2dCQUVBLENBQUM7Z0JBWEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsNk1BSVQ7cUJBQ0YsQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vQW5ndWxhci0yLXBsdXMtTWVhbi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZD86IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZyl7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLm1lc3NhZ2VJZCA9IG1lc3NhZ2VJZDtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvcn1cIiAqbmdJZj1cInNob3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICB7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2FydGljbGU+XG4gIGAsXG4gIHN0eWxlczogW2AgIFxuICAgICAuYXV0aG9yIHtcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICB3aWR0aDogODAlO1xuICAgICB9XG4gICAgIC5jb25maWcge1xuICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgd2lkdGg6IDE5JTtcbiAgICAgfVxuICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgY29sb3IgPSBcIndoaXRlXCI7XG4gIHNob3cgPSB0cnVlO1xuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCcpO1xuICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV0gPSBcIm1lc3NhZ2UuY29udGVudFwiIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PiBcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnSGVsbG8gd29ybGQnLCBudWxsLCAnTWF4Jyk7XG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZyl7XG4gICAgXG4gIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgPG15LW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPjwvbXktbWVzc2FnZT5cbiAgICA8L3NlY3Rpb24+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCB7XG4gIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
