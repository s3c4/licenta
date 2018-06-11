import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from 'angularfire2/firestore';
import {Post} from '../interfaces/post.interface';
import * as moment from 'moment';

@Injectable()
export class PostFireStoreService {

  constructor(
    private afs: AngularFirestore
  ) {}

  /**
   * Add a post to a specific collection
   *
   * @param {string} collection
   * @param {Post.Post} post
   * @returns {Promise<DocumentReference>}
   */
  public addPost(collection: string, post: Post.Post): Promise<DocumentReference> {
    // -->Set: the created date
    post.createdDate = moment().format('DD/MM/YYYY, HH:mm').toString();
    return this.afs.collection(collection).add(post);
  }

}
