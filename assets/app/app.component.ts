import {Component} from 'angular2/core';
import {MessageComponent} from "./messages/message.component";
import {Message} from "./messages/message";
@Component({
    selector: 'my-app',
    template: ` 
      <div class="row">
        <section class="col-md-8 col-md-offset-2">
          <my-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content = $event">
          </my-message>
        </section>
      </div> 
      <div class="row">
      </div>
    `,
    directives: [MessageComponent]
})
export class AppComponent {
  messages: Message[] = [
    new Message('Hello world', null, 'Max'),
    new Message('New message', null, 'Goye')
  ];
}