import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {FormGroup} from '@angular/forms';
import {Login} from '../../interfaces/login.interface'
import {AuthService} from '../../services/auth.service';
import {GeneralPage} from '../general/general';
import {HelpService} from '../../services/help.service';
import {User} from '../../interfaces/user.interface';
import {Storage} from '@ionic/storage';
import {UserFireStoreService} from '../../services/userFireStore.service';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild(Content) content: Content;
  public loginForm: FormGroup;
  private fireUser: User.FireUser;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private helpService: HelpService,
    private storage: Storage,
    private ufsService: UserFireStoreService
  ) {
    this.loginForm = Login.newLoginForm();
  }

  ionViewDidLoad() {}

  /**
   * Login
   */
  public submitForm(): void {
    // -->Check: form validation
    if (this.loginForm.valid) {
      // -->Disable: form to prevent send again
      this.loginForm.disable();
      // -->Login: with credentials
      this.authService.login(this.loginForm.getRawValue())
        .then((data: any) => { // Login: reach the server and get a response
          console.log('Data: ', data);
          if (!data.code) { // Login: success
            // -->Set: fire user where i keep the info about user
            this.constructFireUser(data);
            // -->Set: GeneralPage as root
            this.navCtrl.setRoot(GeneralPage)
              .then(() => {
                // -->Show: toast with success
                this.helpService.showToast('You logged in with success!', 'bottom', 2000, 'toast-correct');
              });
          } else { // Login: error
            // -->Show: toast with error
            this.helpService.showToast('Wrong email or password!', 'bottom', 2000, 'toast-wrong');
            // -->Enable: form, sa user can try again to log in
            this.loginForm.enable();
          }
        });
    } else {
      // -->Enable: form, sa user can try again to log in
      this.loginForm.enable();
    }
  }

  /**
   * Scroll top the content
   */
  public scrollTop(): void {
    this.content.scrollToTop(300);
  }

  private constructFireUser(data): void {
    // -->Set: fireUser from users database
    this.ufsService.getUser(data.user.uid).then((serverUser) => {

      // -->Init: fireUser with empty data
      this.fireUser = User.newUser;

      // -->Set: fireUser from login
      this.fireUser.email = data.user.email;
      this.fireUser.uid = data.user.uid;
      this.fireUser.refreshToken = data.user.refreshToken;

      // -->Set: fireUser from users database
      this.fireUser.firstName = serverUser.firstName;
      this.fireUser.lastName = serverUser.lastName;
      this.fireUser.role = serverUser.role;

      // -->Set: user in local storage
      this.storage.set('fireUser', this.fireUser);
    });
  }

}
