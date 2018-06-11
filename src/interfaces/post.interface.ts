import {FormControl, FormGroup, Validators} from "@angular/forms";

export namespace Post {

  /**
   * Post interface
   */
  export interface Post {
    uid: string
    userName: string
    createdDate: string
    documentUrl: string
    title: string
    text: string
  }

  /**
   * Create a new Post data
   *
   * @type {Post.Post}
   */
  export const newPost = <Post> {
    uid: '',
    userName: '',
    createdDate: '',
    documentUrl: '',
    title: '',
    text: ''
  };

  /**
   * Create a new form or with data for post interface
   *
   * @param {Post.Post} data
   * @returns {FormGroup}
   */
  export function newPostForm(data?: Post): FormGroup {
    const fg = new FormGroup({
      uid: new FormControl(''),
      userName: new FormControl(''),
      createdDate: new FormControl(''),
      documentUrl: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      text: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    });

    if(data)
      fg.patchValue(data);

    return fg;
  }

}
