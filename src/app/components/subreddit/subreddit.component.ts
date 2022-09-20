import { Component, OnInit } from '@angular/core';
import { SubredditPostsService } from '../../services/subreddit-posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  loading = false;
  subreddit: string;
  showSubreddit: boolean;
  subredditPosts: Post[]

  constructor(private subredditPostsService: SubredditPostsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subreddit = params.get('subreddit') || 'popular';
      this.showSubreddit = this.subreddit === 'popular';
  })
    this.loading = true;
    this.subredditPostsService.getPosts(this.subreddit)
      .subscribe(posts => {
        this.loading = false;
        this.subredditPosts = posts;
      });
  }

}
