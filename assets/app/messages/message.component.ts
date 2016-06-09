import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service";
@Component({
  selector: 'my-message',
  template: `
    <!-- <input type="text" [(ngModel)] = "message.content" /> -->
    <article class="panel panel-default" [ngStyle]="{'background-color': color}" *ngIf="show">
      <div class="panel-body">
        {{ message.content }}
      </div>
      <footer class="panel-footer">
        <div class="author">
          {{ message.username }}
        </div>
        <div class="config">
          <a href="#" (click)="onEdit()">Edit</a>
          <a href="#" (click)="onDelete()">Delete</a>
        </div>
      </footer>
    </article>
  `,
  styles: [`  
     .author {
       display: inline-block;
       font-style: italic;
       font-size: 12px;
       width: 80%;
     }
     .config {
       display: inline-block;
       text-align: right;
       font-size: 12px;
       width: 19%;
     }
  `]
})

export class MessageComponent {
  @Input() message: Message;
  @Output() editClicked = new EventEmitter<string>();
  color = "white";
  show = true;

  constructor (private _messageService: MessageService) {}

  onEdit() {
    this._messageService.editMessage(this.message);
  }
  onDelete() {
    this._messageService.deleteMessage(this.message);
  }
}