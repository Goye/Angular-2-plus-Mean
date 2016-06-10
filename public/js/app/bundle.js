"use strict";
var Message = (function () {
    function Message(content, messageId, username, userId) {
        this.content = content;
        this.messageId = messageId;
        this.username = username;
        this.userId = userId;
    }
    return Message;
}());
exports.Message = Message;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBTUUsaUJBQWEsT0FBZSxFQUFFLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxNQUFlO1FBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxlQUFPLFVBWW5CLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgY29udGVudDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IgKGNvbnRlbnQ6IHN0cmluZywgbWVzc2FnZUlkPzogc3RyaW5nLCB1c2VybmFtZT86IHN0cmluZywgdXNlcklkPzogc3RyaW5nKXtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";
var message_1 = require("./message");
var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited', null, 'Dummy');
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDO0lBQUE7UUFDRSxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBaUIzQixDQUFDO0lBZkMsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHNCQUFjLGlCQWtCMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcblxuICBhZGRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGVkaXRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKV0gPSBuZXcgTWVzc2FnZSgnRWRpdGVkJywgbnVsbCwgJ0R1bW15Jyk7XG4gIH1cblxuICBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.editClicked = new core_1.EventEmitter();
        this.color = "white";
        this.show = true;
    }
    MessageComponent.prototype.onEdit = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message);
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
            template: "\n    <!-- <input type=\"text\" [(ngModel)] = \"message.content\" /> -->\n    <article class=\"panel panel-default\" [ngStyle]=\"{'background-color': color}\" *ngIf=\"show\">\n      <div class=\"panel-body\">\n        {{ message.content }}\n      </div>\n      <footer class=\"panel-footer\">\n        <div class=\"author\">\n          {{ message.username }}\n        </div>\n        <div class=\"config\">\n          <a href=\"#\" (click)=\"onEdit()\">Edit</a>\n          <a href=\"#\" (click)=\"onDelete()\">Delete</a>\n        </div>\n      </footer>\n    </article>\n  ",
            styles: ["  \n     .author {\n       display: inline-block;\n       font-style: italic;\n       font-size: 12px;\n       width: 80%;\n     }\n     .config {\n       display: inline-block;\n       text-align: right;\n       font-size: 12px;\n       width: 19%;\n     }\n  "]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFDckUsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBb0NqRDtJQU1FLDBCQUFxQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFKMUMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUNuRCxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxJQUFJLENBQUM7SUFFMkMsQ0FBQztJQUV4RCxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFaRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFyQ1g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLCtqQkFnQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyx1UUFhUixDQUFDO1NBQ0gsQ0FBQzs7d0JBQUE7SUFnQkYsdUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHdCQUFnQixtQkFjNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXSA9IFwibWVzc2FnZS5jb250ZW50XCIgLz4gLS0+XG4gICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCIgKm5nSWY9XCJzaG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICB7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+RWRpdDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvYXJ0aWNsZT5cbiAgYCxcbiAgc3R5bGVzOiBbYCAgXG4gICAgIC5hdXRob3Ige1xuICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgIHdpZHRoOiA4MCU7XG4gICAgIH1cbiAgICAgLmNvbmZpZyB7XG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICB3aWR0aDogMTklO1xuICAgICB9XG4gIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XG4gIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBjb2xvciA9IFwid2hpdGVcIjtcbiAgc2hvdyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cblxuICBvbkVkaXQoKSB7XG4gICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcbiAgfVxuICBvbkRlbGV0ZSgpIHtcbiAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
var message_component_1 = require("./message.component");
var message_service_1 = require("./message.service");
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.messages = this._messageService.getMessages();
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n      <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\">\n      </my-message>\n    </section>\n  ",
            directives: [message_component_1.MessageComponent],
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUVyRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQVdqRDtJQUVFLDhCQUFxQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBRyxDQUFDO0lBR3hELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQWpCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxxTkFLVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQy9CLENBQUM7OzRCQUFBO0lBU0YsMkJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDRCQUFvQix1QkFRaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgPG15LW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPlxuICAgICAgPC9teS1tZXNzYWdlPlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcbiAgfVxufSAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var message = new message_1.Message(form.content, null, 'Dummy');
        this._messageService.addMessage(message);
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n    <section class=\"col-md-8 col-md-offset-2\">\n      <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"content\">Content</label>\n          <input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #input/>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\n      </form>\n    </section>\n  ",
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBZWpEO0lBRUUsK0JBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUVuRCxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLElBQVM7UUFDaEIsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUF2Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsZ2JBVVQ7U0FDRixDQUFDOzs2QkFBQTtJQVdGLDRCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw2QkFBcUIsd0JBVWpDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb250ZW50XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcblxuICB9XG5cbiAgb25TdWJtaXQoZm9ybTogYW55KSB7XG4gICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XG4gICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n    <h1>Auth</h1>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFPeEM7SUFBQTtJQUVBLENBQUM7SUFSRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUseUJBRVQ7U0FDRixDQUFDOzsrQkFBQTtJQUdGLDhCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwrQkFBdUIsMEJBRW5DLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMT5BdXRoPC9oMT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
            {
                path: '/',
                component: messages_component_1.MessagesComponent,
            },
            {
                path: '/auth',
                component: authentication_component_1.AuthenticationComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxtQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQUNoRSx5Q0FBc0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN4RSxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQXFCbkQ7SUFBQTtJQUNBLENBQUM7SUFyQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGtJQUtUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsQ0FBQztTQUNuRCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLHNDQUFpQjthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxrREFBdUI7YUFDbkM7U0FDRixDQUFDOztvQkFBQTtJQUVGLG1CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxvQkFBWSxlQUN4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50XVxufSlcbkBSb3V0ZXMoW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGNvbXBvbmVudDogTWVzc2FnZXNDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2F1dGgnLFxuICAgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnRcbiAgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";
///<reference path="../../typings/browser.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require("./app.component");
var message_service_1 = require("./messages/message.service");
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [message_service_1.MessageService, router_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDtBQUNqRCx5Q0FBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQUM1RCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUMxRCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx1QkFBcUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RSxxQkFBc0IsZUFBZSxDQUFDLENBQUE7QUFFdEMsb0NBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsZ0NBQWMsRUFBRSx5QkFBZ0IsRUFBRSxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTWVzc2FnZVNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";
var User = (function () {
    function User(email, password, firstName, lastName) {
        this.email = email;
    }
    return User;
}());
exports.User = User;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFDRSxjQUFtQixLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFrQixFQUFFLFFBQWlCO1FBQXRFLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFaEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLFlBQUksT0FJaEIsQ0FBQSIsImZpbGUiOiJhdXRoL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBmaXJzdE5hbWU/OiBzdHJpbmcsIGxhc3ROYW1lPzogc3RyaW5nKXtcbiAgICBcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
