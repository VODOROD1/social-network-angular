import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { SettingsComponent } from './settings/settings.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { appRouterModule } from './router/router.module';
import { PostsService } from './posts.service';
import { PostComponent } from './profile/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MessagesComponent,
    NewsComponent,
    MusicComponent,
    SettingsComponent,
    LeftSidebarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
