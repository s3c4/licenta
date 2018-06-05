import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {Chat} from "../../interfaces/chat.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'anul-unu',
  templateUrl: 'anul-unu.html'
})
export class AnulUnuPage {

  public activeComponent = 'Posts';
  @ViewChild(Content) content: Content;

  public formChat: FormGroup;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.formChat = Chat.newChatForm();
    console.log(this.formChat.getRawValue());
  }

  /**
   * Scroll top the content
   */
  public scrollTop(): void {
    this.content.scrollToTop(300);
  }


}