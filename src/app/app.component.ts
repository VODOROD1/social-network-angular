import { Component } from '@angular/core';
import { PostsService } from './posts.service';

export interface PostInterface {
  id: number;
  text: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'test-new-angular';
  public myPosts: PostInterface[] = [
    {
      id: 1,
      text: "Hey, everybody love me!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      text: "It's our new program! Hey!",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]

  constructor(private myPostsService: PostsService) {
    this.myPostsService.myPosts = this.myPosts;
  }

}
