import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Login } from "../interfaces/login.interface";

@Injectable()
export class AuthService {

  public constructor(
    private afAuth: AngularFireAuth,
  ) {}

  /**
   * Login with email and password
   *
   * @param {Login.Login} login
   * @returns {Promise<any>}
   */
  public login(login: Login.Login): Promise<any> {
      return this.afAuth.auth.signInWithEmailAndPassword(login.email, login.password)
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
  }



}
