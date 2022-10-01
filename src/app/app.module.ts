import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { PostComponent } from './components/post/post.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostContentComponent } from './components/post-content/post-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FullCardComponent } from './components/full-card/full-card.component';
import { CommentComponent } from './components/comment/comment.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SubredditMenuComponent } from './components/subreddit-menu/subreddit-menu.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SubredditComponent,
    PostComponent,
    CardComponent,
    PostContentComponent,
    LoadingComponent,
    FullCardComponent,
    CommentComponent,
    HeaderComponent,
    SearchResultsComponent,
    SubredditMenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
