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
System.register("messages/message-list.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var MessageListComponent;
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
            MessageListComponent = (function () {
                function MessageListComponent() {
                    this.messages = [
                        new message_2.Message('Hello world', null, 'Max'),
                        new message_2.Message('New message', null, 'Goye')
                    ];
                }
                MessageListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message-list',
                        template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n      <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\">\n      </my-message>\n    </section>\n  ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_3("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message-list.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, message_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_3.Component({
                        selector: 'my-app',
                        template: " \n      <div class=\"row\">\n      </div> \n      <div class=\"row\">\n        <my-message-list></my-message-list>\n      </div>\n    ",
                        directives: [message_list_component_1.MessageListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_4("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
System.register("auth/user", [], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
            exports_6("User", User);
        }
    }
});
System.register("messages/message-input.component", ["angular2/core"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_4;
    var MessageInputComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent() {
                }
                MessageInputComponent = __decorate([
                    core_4.Component({
                        selector: 'my-message-input',
                        template: "\n    \n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_7("MessageInputComponent", MessageInputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJhcHAuY29tcG9uZW50LnRzIiwiYm9vdC50cyIsImF1dGgvdXNlci50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNRSxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQUNILGNBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDZCQVlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3lCRDtnQkFBQTtvQkFFWSxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO29CQUNuRCxVQUFLLEdBQUcsT0FBTyxDQUFDO29CQUNoQixTQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUlkLENBQUM7Z0JBSEMsa0NBQU8sR0FBUDtvQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFORDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBckNYO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxnaUJBZ0JUO3dCQUNELE1BQU0sRUFBRSxDQUFDLHVRQWFSLENBQUM7cUJBQ0gsQ0FBQzs7b0NBQUE7Z0JBVUYsdUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELCtDQVFDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2hDRDtnQkFBQTtvQkFDRSxhQUFRLEdBQWM7d0JBQ3BCLElBQUksaUJBQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzt3QkFDdkMsSUFBSSxpQkFBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO3FCQUN6QyxDQUFDO2dCQUNKLENBQUM7Z0JBZkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUscU5BS1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O3dDQUFBO2dCQU1GLDJCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCx1REFLQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNMRDtnQkFBQTtnQkFDQSxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx5SUFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztxQkFDckMsQ0FBQzs7Z0NBQUE7Z0JBRUYsbUJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELHVDQUNDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDVkQsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lDSnhCO2dCQUNFLGNBQW1CLEtBQWEsRUFBRSxRQUFnQixFQUFFLFNBQWtCLEVBQUUsUUFBaUI7b0JBQXRFLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBRWhDLENBQUM7Z0JBQ0gsV0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUJBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDR0Q7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFSRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxZQUVUO3FCQUNGLENBQUM7O3lDQUFBO2dCQUdGLDRCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx5REFFQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL0FuZ3VsYXItMi1wbHVzLU1lYW4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIG1lc3NhZ2VJZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvciAoY29udGVudDogc3RyaW5nLCBtZXNzYWdlSWQ/OiBzdHJpbmcsIHVzZXJuYW1lPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcpe1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV0gPSBcIm1lc3NhZ2UuY29udGVudFwiIC8+XG4gICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCIgKm5nSWY9XCJzaG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICB7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPkVkaXQ8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9hcnRpY2xlPlxuICBgLFxuICBzdHlsZXM6IFtgICBcbiAgICAgLmF1dGhvciB7XG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgd2lkdGg6IDgwJTtcbiAgICAgfVxuICAgICAuY29uZmlnIHtcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgIHdpZHRoOiAxOSU7XG4gICAgIH1cbiAgYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcbiAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGNvbG9yID0gXCJ3aGl0ZVwiO1xuICBzaG93ID0gdHJ1ZTtcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoJ0NoYW5nZWQnKTtcbiAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgPG15LW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPlxuICAgICAgPC9teS1tZXNzYWdlPlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtcbiAgICBuZXcgTWVzc2FnZSgnSGVsbG8gd29ybGQnLCBudWxsLCAnTWF4JyksXG4gICAgbmV3IE1lc3NhZ2UoJ05ldyBtZXNzYWdlJywgbnVsbCwgJ0dveWUnKVxuICBdO1xufSAgIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPC9kaXY+IFxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZyl7XG4gICAgXG4gIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIFxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xuICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
