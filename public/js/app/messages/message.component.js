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
