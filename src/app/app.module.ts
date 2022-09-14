import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { PostComponent } from './components/post/post.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostContentComponent } from './components/post-content/post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SubredditComponent,
    PostComponent,
    CardComponent,
    PostContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
