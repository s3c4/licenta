import {FormControl, FormGroup, Validators} from "@angular/forms";

export namespace Chat {
  /**
   * Chat interface
   */
  export interface Chat {
    uid: string
    createdDate: string
    userName: string
    text: string
  }

  /**
   * Create a new Chat data
   *
   * @type {Chat.Chat}
   */
  export const newChat = <Chat> {
    uid: '',
    createdDate: '',
    userName: '',
    text: ''
  };

  /**
   * Create a new form or with data for chat interface
   *
   * @param {Chat.Chat} data
   * @returns {FormGroup}
   */
  export function newChatForm(data?: Chat): FormGroup {
    const form = new FormGroup({
      createdDate: new FormControl(''),
      uid: new FormControl(''),
      userName: new FormControl(''),
      text: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    });

    if(data) {
      form.patchValue(data);
    }

    return form;
  }

}
