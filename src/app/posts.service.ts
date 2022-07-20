import { Injectable } from '@angular/core';
import { PostInterface } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  public _myPosts: PostInterface[] = [];

  get myPosts() {
    return this._myPosts;
  }

  set myPosts(posts) {
    this._myPosts = posts
  }

  constructor() { }
}
