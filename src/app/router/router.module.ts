import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';
import { NewsComponent } from '../news/news.component';
import { PostComponent } from '../profile/post/post.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, children: [
    {
      path: 'post/:id', component: PostComponent
    }
  ]},
  {path: 'messages', component: MessagesComponent},
  {path: 'news', component: NewsComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class appRouterModule { }
