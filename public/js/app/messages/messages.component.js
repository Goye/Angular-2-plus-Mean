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
var message_list_component_1 = require("./message-list.component");
var message_input_component_1 = require("./message-input.component");
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'my-messages',
            template: "\n    <div class=\"row spacing\">\n      <my-message-input></my-message-input>\n    </div> \n    <div class=\"row spacing\">\n      <my-message-list></my-message-list>\n    </div>\n  ",
            directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVDQUFtQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzlELHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBYWhFO0lBQUE7SUFFQSxDQUFDO0lBZEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHlMQU9UO1lBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsK0NBQXFCLENBQUM7U0FDMUQsQ0FBQzs7eUJBQUE7SUFHRix3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkseUJBQWlCLG9CQUU3QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlSW5wdXRDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICA8bXktbWVzc2FnZS1pbnB1dD48L215LW1lc3NhZ2UtaW5wdXQ+XG4gICAgPC9kaXY+IFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgPG15LW1lc3NhZ2UtbGlzdD48L215LW1lc3NhZ2UtbGlzdD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW01lc3NhZ2VMaXN0Q29tcG9uZW50LCBNZXNzYWdlSW5wdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcbiAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
