import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";
import {PostAddPage} from "../../pages/post-add/post-add";
import {AngularFirestore} from "angularfire2/firestore";

@Component({
  selector: 'general-posts',
  templateUrl: 'general-posts.html'
})
export class GeneralPostsComponent implements OnInit {

  @Input() public role: string;

  public posts = [];

  constructor(
    private navCtrl: NavController,
    private afs: AngularFirestore
    ) {

  }

  public ngOnInit() {
    this.getPosts();
  }


  /**
   * Go to add post page
   */
  public goToAddPost(): void {
    this.navCtrl.push(PostAddPage, {role: this.role});
  }

  /**
   * Get posts from fire store
   */
  public getPosts(): void {
    this.afs.firestore.collection('posts-' + this.role)
      .orderBy('createdDate', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.posts.push(change.doc.data());
        });
      });
  }

}
