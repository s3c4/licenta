import {Component, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'cont',
  templateUrl: 'cont.html'
})
export class ContPage {
  @ViewChild(Content) content: Content;

  public fireUser: User.FireUser;

  constructor(
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get('fireUser').then((storageUser: User.FireUser) => {
      this.fireUser = storageUser;
    });
  }

}
