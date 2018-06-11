import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from 'angularfire2/firestore';
import {Chat} from '../interfaces/chat.interface';
import * as moment from 'moment';

@Injectable()
export class ChatFireStoreService {

  constructor(
    private afs: AngularFirestore
  ) {}

  /**
   * Add a chat to a specific collection
   *
   * @param {string} collection
   * @param {Chat.Chat} chat
   * @returns {Promise<DocumentReference>}
   */
  public addChat(collection: string, chat: Chat.Chat): Promise<DocumentReference> {
    // -->Set: the created date
    chat.createdDate = moment().format('DD/MM/YYYY, HH:mm').toString();
    return this.afs.collection(collection).add(chat);
  }

}
