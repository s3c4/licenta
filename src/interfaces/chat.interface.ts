import {FormControl, FormGroup, Validators} from "@angular/forms";

export namespace Chat {
  /**
   * Chat interface
   */
  export interface Chat {
    id: string
    userId: string
    userName: string
    date: string
    title: string
    text: string
  }

  /**
   * Create a new Chat data
   *
   * @type {Chat.Chat}
   */
  export const newChat = <Chat> {
    id: '',
    userId: '',
    userName: '',
    date: '',
    title: '',
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
      id: new FormControl(''),
      userId: new FormControl(''),
      userName: new FormControl(''),
      date: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      text: new FormControl('', [Validators.required, Validators.maxLength(1000)])
    });

    if(data) {
      form.patchValue(data);
    }

    return form;
  }

}
