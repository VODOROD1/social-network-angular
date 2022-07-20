import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostInterface } from '../app.component';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})

export class ProfileComponent implements OnInit {

  public posts: PostInterface[];

  constructor(private myPostsService: PostsService,
            private route: ActivatedRoute
  ) {
    this.posts = [];
  }

  ngOnInit(): void {
    /* eslint-disable-next-line */
    debugger;
    this.posts = this.myPostsService.myPosts;
  }

}
