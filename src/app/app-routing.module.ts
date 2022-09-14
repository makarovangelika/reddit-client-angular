import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';

const routes: Routes = [
  { path: '', component: SubredditComponent},
  { path: ':subreddit', component: SubredditComponent},
  { path: ':subreddit/:postId', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }