import { Component, ViewChild } from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import { FormGroup } from "@angular/forms";
import { Login } from '../../interfaces/login.interface'
import { AuthService } from '../../services/auth.service';
import { GeneralPage } from '../general/general';
import { HelpService } from '../../services/help.service';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild(Content) content: Content;
  public loginForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private helpService: HelpService
  ) {
    this.loginForm = Login.newLoginForm();
    console.log(this.loginForm.getRawValue());
  }

  ionViewDidLoad() {

  }

  /**
   * Login
   */
  public submitForm(): void {
    // -->Check: form validation
    if (this.loginForm.valid) {
      // -->Login: with credentials
      this.authService.login(this.loginForm.getRawValue())
        .then((data: any) => { // Login: reach the server and get a response
          if (!data.code) { // Login: success
            // -->Set: GeneralPage as root
            this.navCtrl.setRoot(GeneralPage)
              .then(() => {
                // -->Show: toast with success
                this.helpService.showToast('You logged in with success!', 'bottom', true, 3000, 'toast-correct');
              });
          } else { // Login: error
            // -->Show: toast with error
            this.helpService.showToast('Wrong email or password!', 'bottom', true, 3000, 'toast-wrong');
          }
        });
    }
  }

  /**
   * Scroll top the content
   */
  public scrollTop(): void {
    this.content.scrollToTop(300);
  }


}
