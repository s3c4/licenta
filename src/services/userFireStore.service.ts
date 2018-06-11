import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable()
export class UserFireStoreService {

  private collectionUsers = this.afs.collection('users');

  public constructor(
    private afs: AngularFirestore,
  ) {}

  /**
   * Get current user
   *
   * @param {string} docRef
   * @returns {Promise<firebase.firestore.DocumentData>}
   */
  public getUser(docRef: string): Promise<firebase.firestore.DocumentData> {
    return this.collectionUsers.doc(docRef).ref.get().then((doc) => {
      return doc.data();
    });
  }

}
