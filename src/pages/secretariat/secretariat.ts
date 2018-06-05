import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';

@Component({
  selector: 'secretariat',
  templateUrl: 'secretariat.html'
})
export class SecretariatPage {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}

  /**
   * Scroll top the content
   */
  public scrollTop(): void {
    this.content.scrollToTop(300);
  }


}
