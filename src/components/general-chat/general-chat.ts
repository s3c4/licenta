import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Content} from "ionic-angular";

@Component({
  selector: 'general-chat',
  templateUrl: 'general-chat.html'
})
export class GeneralChatComponent implements OnInit, OnChanges {
  @Input() public role: string;
  @Input() public content: Content;
  public chats = [];

  constructor(private afs: AngularFirestore) {}

  public ngOnInit() {
    this.getChats();
  }

  public ngOnChanges() {}

  ionViewWillEnter() {
  }

  /**
   * Get posts from fire store
   */
  public getChats(): void {
    this.afs.firestore.collection('chats-' + this.role)
      .orderBy('createdDate', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.chats.push(change.doc.data());
        });
      });
  }

}


