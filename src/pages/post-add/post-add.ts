import {Component, OnInit} from '@angular/core';
import {Post} from "../../interfaces/post.interface";
import {FormGroup} from "@angular/forms";
import {NavController, NavParams} from "ionic-angular";
import {PostFireStoreService} from "../../services/postFireStore.service";
import {Storage} from "@ionic/storage";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'post-add',
  templateUrl: 'post-add.html'
})
export class PostAddPage implements OnInit {

  public addPostForm: FormGroup;

  constructor(
    private navParams: NavParams,
    private postService: PostFireStoreService,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  public ngOnInit(): void {
    this.addPostForm = Post.newPostForm();
  }

  public addPost(): void {
    // -->Get: fire user from local storage
    this.storage.get('fireUser')
      .then((fireUser: User.FireUser) => {
        // -->Set: user name from local storage (first name + last name)
        this.addPostForm.get('userName').setValue(fireUser.lastName + ' ' +fireUser.firstName);
        // -->Set: user id
        this.addPostForm.get('uid').setValue(fireUser.uid);
      })
      .then(() => {
        // -->Form: is valid
        if (this.addPostForm.valid) {
          // -->Send: data to server
          this.postService.addPost('posts-' + this.navParams.get('role'), this.addPostForm.getRawValue())
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              this.navCtrl.pop();
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        }
      })
      .catch((error) => {
        console.log('Error get fireUser: ', error);
      });
  }

}
