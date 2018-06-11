import {Injectable} from '@angular/core';
import {Toast, ToastController} from 'ionic-angular';

@Injectable()
export class HelpService {

  private toast: Toast;

  public constructor(
    private toastCtrl: ToastController,
  ) { }

  /**
   * Show a toast
   *
   * @param {string} message
   * @param {string} position
   * @param {number} duration
   * @param {string} cssClass
   */
  public showToast(message: string, position: string, duration: number, cssClass: string): void {
    if (this.toast) { this.toast.dismiss(); }
    this.toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: duration,
      cssClass: cssClass,
    });
    this.toast.present();
  }


}
