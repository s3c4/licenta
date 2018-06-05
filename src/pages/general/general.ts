import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {Chat} from "../../interfaces/chat.interface";
import {FormGroup} from "@angular/forms";
import {Storage} from "@ionic/storage";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'general',
  templateUrl: 'general.html'
})
export class GeneralPage {

  public activeComponent = 'Posts';
  @ViewChild(Content) content: Content;

  public formChat: FormGroup;

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {
    this.formChat = Chat.newChatForm();
    // console.log(this.formChat.getRawValue());
  }

  ionViewDidLoad() {
    // -->Get: fire user from local storage
    this.storage.get('fireUser').then((user: User.FireUser) => {
      console.log(user);
    });

  }

  /**
   * Scroll top the content
   */
  public scrollTop(): void {
    this.content.scrollToTop(300);
  }


}
