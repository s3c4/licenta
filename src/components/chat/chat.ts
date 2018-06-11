import {Component, Input} from '@angular/core';
import {Chat} from "../../interfaces/chat.interface";

@Component({
  selector: 'chat',
  templateUrl: 'chat.html'
})
export class ChatComponent {

  @Input() public chat: Chat.Chat;

  constructor() {}

}
