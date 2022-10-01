import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';

const routes: Routes = [
  { path: '', component: SubredditComponent},
  { path: 'search', component: SearchResultsComponent},
  { path: ':subreddit', component: SubredditComponent},
  { path: ':subreddit/:postId', component: PostComponent}
];
/*const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
}*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }