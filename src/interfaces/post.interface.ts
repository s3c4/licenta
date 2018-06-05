import {FormControl, FormGroup, Validators} from "@angular/forms";

export namespace Post {
  /**
   * Post interface
   */
  export interface Post {
    id: string
    userId: string
    userName: string
    date: string
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
    id: '',
    userId: '',
    userName: '',
    date: '',
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
      id: new FormControl(''),
      userId: new FormControl(''),
      userName: new FormControl(''),
      date: new FormControl(''),
      documentUrl: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      text: new FormControl('', [Validators.required, Validators.maxLength(1000)])
    });

    if(data)
      fg.patchValue(data);

    return fg;
  }

}
