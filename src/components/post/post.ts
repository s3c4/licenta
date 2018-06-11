import {Component, Input} from '@angular/core';
import {Post} from "../../interfaces/post.interface";

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {

  @Input() public post: Post.Post;

  constructor() {}

}
