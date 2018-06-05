import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Login } from "../interfaces/login.interface";
import { Storage } from "@ionic/storage";
import { User} from "../interfaces/user.interface";

@Injectable()
export class AuthService {
  private loginUser: User.LoginUser;

  public constructor(
    private afAuth: AngularFireAuth,
    private storage: Storage
  ) {}

  /**
   * Login user
   *
   * @param {Login.Login} login
   */
  public login(login: Login.Login): Promise<any> {
    this.storage.get('fireUser').then((user: User.LoginUser) => {
      this.loginUser = user;
    });
    if (!this.loginUser) {
      return this.afAuth.auth.signInWithEmailAndPassword(login.email, login.password)
        .then((data) => {
          console.log('Data: ', data);
          // -->Create: the login user
          this.loginUser = {
            email: data.user.email,
            uid: data.user.uid,
            refreshToken: data.user.refreshToken
          };
          // -->Set: user in local storage
          this.storage.set('fireUser', this.loginUser);
          return data;
        })
        .catch((error) => {
          return error;
        });
    } else {
      this.afAuth.auth.signInWithCustomToken(this.loginUser.refreshToken).then((data) => {
        console.log('Refresh: ', data);
        return data;
      });
    }

  }
}
