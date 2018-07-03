import {Component, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';
import {Chat} from '../../interfaces/chat.interface';
import {FormGroup} from '@angular/forms';
import {User} from '../../interfaces/user.interface';
import {Storage} from '@ionic/storage';
import {ChatFireStoreService} from '../../services/chatFireStore.service';

@Component({
  selector: 'anul-doi',
  templateUrl: 'anul-doi.html'
})
export class AnulDoiPage {
  @ViewChild(Content) content: Content;

  public role = 'anul2';
  public activeComponent = 'Posts';
  public formChat: FormGroup;

  constructor(
    private storage: Storage,
    private chatService: ChatFireStoreService
  ) {}

  ionViewDidLoad() {
    this.formChat = Chat.newChatForm();
  }

  /**
   * Scroll top the content
   */
  public scrollTop(): void {
    this.content.scrollToTop(300);
  }

  public onSubmit(): void {
    this.storage.get('fireUser')
      .then((fireUser: User.FireUser) => {
        // -->Set: user name from local storage (first name + last name)
        this.formChat.get('userName').setValue(fireUser.lastName + ' ' + fireUser.firstName);
        // -->Set: user id
        this.formChat.get('uid').setValue(fireUser.uid);
      })
      .then(() => {
        // -->Form: is valid
        if (this.formChat.valid) {
          // -->Send: data to server
          this.chatService.addChat('chats-' + this.role, this.formChat.getRawValue())
            .then((docRef) => {
              // -->Set: text form to empty
              this.formChat.get('text').setValue('');
              // -->Scroll: bottom
              this.content.scrollToBottom(0);
              console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        }
      })
      .catch((error) => {
        console.log('Error get fireUser: ', error);
      });
  }

}
