import { Component, Input, OnInit } from '@angular/core';
import { Subreddit } from '../../models/subreddit';
import { SubredditsService } from '../../services/subreddits.service';

@Component({
  selector: 'app-subreddit-menu',
  templateUrl: './subreddit-menu.component.html',
  styleUrls: ['./subreddit-menu.component.css']
})
export class SubredditMenuComponent implements OnInit {

  @Input() toggleMenu: () => void;

  subreddits: Subreddit[];
  loading = false;
  error = '';

  constructor(private subredditsService: SubredditsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.subredditsService.getSubreddits()
      .subscribe({
        next: subreddits => {
          this.loading = false;
          this.subreddits = subreddits;
        },
        error: err => this.error = err
      })
  }

}
