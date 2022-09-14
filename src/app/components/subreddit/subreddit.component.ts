import { Component, OnInit } from '@angular/core';
import { SubredditPostsService } from '../../services/subreddit-posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  loading = false;
  subreddit: string;
  showSubreddit: boolean;

  constructor(public subredditPostsService: SubredditPostsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subreddit = params.get('subreddit') || 'popular';
      this.showSubreddit = this.subreddit === 'popular';
  })
    this.loading = true;
    this.subredditPostsService.getAll(this.subreddit)
      .subscribe(() => this.loading = false);
  }

}
